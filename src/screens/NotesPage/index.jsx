import { CustomModal, ListInput, TaskList } from '../../components/index'
import React, { useState } from 'react';
import { View, useColorScheme } from 'react-native';
import { addNote, deleteNote, selectNote } from "../../redux/actions/index"
import { useDispatch, useSelector } from 'react-redux';

import { COLOURS } from "../../assets/COLOURS"
import { styles } from './styles';

const NotesPage = ({ route }) => {

    const dispatch = useDispatch();

    const generalNotes = useSelector( (state) => state.general.generalNotes);

    const noteSelected = useSelector( (state) => state.general.selected);

    const [inputValue, setInputValue] = useState("");

    const [isModalVisible, setModalVisible] = useState(false);

    const currentScreen = route.name;
    
    const theme = ( useColorScheme() === "light" ? "light" : "dark" );

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

    function pageColors(){
        switch (currentScreen) {
            case "general" : return (
                (theme === "light") ? {backgroundColor: COLOURS[theme].cream} : {backgroundColor: COLOURS[theme].theme}
            )
            case "shopping" : return (
                (theme === "light") ? {backgroundColor: COLOURS[theme].yellow} : {backgroundColor: COLOURS[theme].darkGrey}
            )
            case "toDo" : return (
                (theme === "light") ? {backgroundColor: COLOURS[theme].blue} : {backgroundColor: COLOURS[theme].grey}
            )
            default: return (
                (theme === "light") ? {backgroundColor: COLOURS[theme].cream} : {backgroundColor: COLOURS[theme].theme}
            )
        };
    }

    return (
        <View style={[styles.appContainer, pageColors()]}>
            <ListInput
                onChangeInputHandler={onChangeInputHandler}
                onPressAddHandler={onPressAddHandler}
                inputValue={inputValue}
                currentScreen={currentScreen}
            />
            <TaskList 
                list={generalNotes}
                onHandleModal={onHandleModal}
                currentScreen={currentScreen}
            />
            <CustomModal
                isModalVisible={isModalVisible}
                selectedItem={noteSelected}
                onPressCancel={onPressCancel}
                onPressDelete={onPressDeleteHandler}
            />
        </View>
    );
};

export default NotesPage;