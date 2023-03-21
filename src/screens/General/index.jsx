import { CustomModal, ListInput, TaskList } from '../../components/index'
import React, { useState } from 'react';
import { addNote, deleteNote, selectNote } from "../../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux';

import { COLOURS } from "../../assets/COLOURS"
import { View } from 'react-native';
import { styles } from './styles';

const General = () => {

    const dispatch = useDispatch();

    const generalNotes = useSelector( (state) => state.general.generalNotes);

    const noteSelected = useSelector( (state) => state.general.selected);

    const theme = useSelector( (state) => state.appSettings.appTheme);

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
                buttonColor={COLOURS[theme].alt}
                buttonText='Add'
                onChangeInputHandler={onChangeInputHandler}
                onPressAddHandler={onPressAddHandler}
                placeholder='add a new task'
                inputValue={inputValue}
                className="general"
            />
            <TaskList 
                list={generalNotes}
                onHandleModal={onHandleModal}
                className="general"
            />
            <CustomModal
                isModalVisible={isModalVisible}
                cancelColor={COLOURS[theme].alt}
                cancelTitle="No, go back"
                onPressCancel={onPressCancel}
                deleteColor={COLOURS[theme].alt}
                deleteTitle="Yes, delete it!"
                onPressDelete={onPressDeleteHandler}
                selectedItem={noteSelected}
                className="general"
            />
        </View>
    );
};

export default General;