import { CustomModal, ListInput, TaskList } from '../../components/index'
import React, { useState } from 'react';
import { addNote, deleteNote } from "../../notes/actions/index"
import { useDispatch, useSelector } from 'react-redux';

import { COLOURS } from "../../assets/COLOURS"
import { View } from 'react-native';
import { styles } from './styles';

const General = () => {

    const { black, blue, grey, lightBlue, orange, pink, violet, yellow } = COLOURS.light;

    const dispatch = useDispatch();

    const notes = useSelector( (state) => state.general);

    const [inputValue, setInputValue] = useState("");

    const [isModalVisible, setModalVisible] = useState(false);

    const [selectedItem, setSelectedItem] = useState(null);

    const onChangeInputHandler = (text) => {
        setInputValue(text);
    };

    const onPressAddHandler = () => {
        const payload = {
            categoryId: "general",
            note: {
                id: Math.random().toString(),
                value: inputValue,
            }
        }
        dispatch(addNote(payload));
        setInputValue('')
    };

    const onPressDelete = () => {
        const payload = {
            categoryId: "general",
            note: {
                id: Math.random().toString(),
                value: inputValue,
            }
        }
        dispatch(deleteNote(payload));
        setModalVisible(!isModalVisible);
    };

    const onHandleModal = (item) => {
        setModalVisible(!isModalVisible);
        setSelectedItem(item);
    };
  
    const onPressCancel = () => {
        setModalVisible(!isModalVisible);
        setSelectedItem(null);
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
            />
            <TaskList 
                list={notes}
                onHandleModal={onHandleModal}
            />
            <CustomModal
                isModalVisible={isModalVisible}
                cancelColor={lightBlue}
                cancelTitle="No, go back"
                onPressCancel={onPressCancel}
                deleteColor={orange}
                deleteTitle="Yes, delete it!"
                onPressDelete={onPressDelete}
                selectedItem={selectedItem}
            />
        </View>
    );
};

export default General;