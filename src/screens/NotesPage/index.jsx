import { CustomModal, ListInput, TaskList } from '../../components/index'
import React, { useEffect, useState } from 'react';
import { View, useColorScheme } from 'react-native';
import { deleteNote, loadNotes, saveNote, selectNote } from "../../redux/note.slice"
import { useDispatch, useSelector } from 'react-redux';

import { COLOURS } from "../../assets/COLOURS"
import { styles } from './styles';

const NotesPage = ({ route }) => {

    const currentScreen = route.name;

    const dispatch = useDispatch();

    const notes = useSelector( (state) => state.notes[currentScreen])

    const [inputValue, setInputValue] = useState("");

    const [isModalVisible, setModalVisible] = useState(false);
    
    const theme = ( useColorScheme() === "light" ? "light" : "dark" );

    const onChangeInputHandler = (text) => {
        setInputValue(text);
    };

    const onPressAddHandler = () => {
        const payload = {
            category: currentScreen,
            value: inputValue,
            image: "noImage"
        }
        dispatch(saveNote(payload));
        setInputValue('')
    };

    const onPressDeleteHandler = () => {
        setModalVisible(!isModalVisible);
        dispatch(deleteNote());
    };

    const onHandleModal = (item) => {
        setModalVisible(!isModalVisible);
        console.log(item);
        const payload = {
            id: item.id,
            category: item.category,
            value: item.value,
            image: item.image
        }
        dispatch(selectNote(payload));
    };
  
    const onPressCancel = () => {
        setModalVisible(!isModalVisible);
        const payload = null;
        dispatch(selectNote(payload));
    };

    useEffect(() => {
        dispatch(loadNotes())
    },[dispatch])

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
                list={notes}
                onHandleModal={onHandleModal}
                currentScreen={currentScreen}
            />
            <CustomModal
                isModalVisible={isModalVisible}
                onPressCancel={onPressCancel}
                onPressDelete={onPressDeleteHandler}
            />
        </View>
    );
};

export default NotesPage;