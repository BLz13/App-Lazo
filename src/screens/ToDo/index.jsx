import { CustomModal, ListInput, TaskList } from '../../components/index'
import React, { useState } from 'react';

import { COLOURS } from "../../assets/COLOURS";
import { View } from 'react-native';
import { styles } from './styles';

const ToDo = () => {

    const {black, grey, violet, pink, orange, lightBlue, yellow, blue} = COLOURS.light;

    const [inputValue, setInputValue] = useState("");

    const [isModalVisible, setModalVisible] = useState(false);

    const [list, setList] = useState([]);

    const [selectedItem, setSelectedItem] = useState(null);

    const onChangeInputHandler = (text) => {
        setInputValue(text);
    };

    const onPressAddHandler = () => {
        setList([
        ...list,
        {
            id: Math.random().toString(),
            value: inputValue,
        }
        ])
        setInputValue('')
    };

    const onHandleModal = (item) => {
        setModalVisible(!isModalVisible);
        setSelectedItem(item);
    };
  
    const onPressCancel = () => {
        setModalVisible(!isModalVisible);
        setSelectedItem(null);
    };

    const onPressDelete = () => {
        setList( (prevItemsList) => prevItemsList.filter( (item) => item.id !== selectedItem.id));
        setModalVisible(!isModalVisible);
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
                list={list}
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

export default ToDo;