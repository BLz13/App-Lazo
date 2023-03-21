import { CustomModal, ListInput, TaskList } from '../../components/index'
import React, { useState } from 'react';
import { addNote, deleteNote, selectNote } from "../../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux';

import { COLOURS } from "../../assets/COLOURS"
import { View } from 'react-native';
import { styles } from './styles';

const ToDo = () => {

    const { black, blue, grey, lightBlue, orange, pink, violet, yellow } = COLOURS.light;

    const dispatch = useDispatch();

    const toDoNotes = useSelector( (state) => state.toDo.toDoNotes);
    
    const selectedNote = useSelector( (state) => state.toDo.selectedNote);

    const [inputValue, setInputValue] = useState("");

    const [isModalVisible, setModalVisible] = useState(false);

    const onChangeInputHandler = (text) => {
        setInputValue(text);
    };

    const onPressAddHandler = () => {
        const payload = {
            id: Math.random().toString(),
            value: inputValue,
        }
        dispatch(addNote(payload));
        setInputValue('')
    };

    const onPressDeleteHandler = () => {
        dispatch(deleteNote());
        setModalVisible(!isModalVisible);
    };

    const onHandleModal = (item) => {
        setModalVisible(!isModalVisible);
        const payload = {
            note: item
        }
        dispatch(selectNote(payload));
    };
  
    const onPressCancel = () => {
        setModalVisible(!isModalVisible);
        const payload = {
            note: null
        }
        dispatch(selectNote(payload));
    };
    
    return (
        <View style={styles.appContainer}>
            <ListInput 
                buttonColor={violet}
                buttonText='Add'
                onChangeInputHandler={onChangeInputHandler}
                onPressAddHandler={onPressAddHandler}
                placeholder='add a new task'
                inputValue={inputValue}
                className="toDo"
            />
            <TaskList 
                list={toDoNotes}
                onHandleModal={onHandleModal}
                className="toDo"
            />
            <CustomModal
                isModalVisible={isModalVisible}
                cancelColor={lightBlue}
                cancelTitle="No, go back"
                onPressCancel={onPressCancel}
                deleteColor={orange}
                deleteTitle="Yes, delete it!"
                onPressDelete={onPressDeleteHandler}
                selectedItem={selectedNote}
                className="toDo"
            />
        </View>
    );
};

export default ToDo;