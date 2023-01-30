import { CustomModal, ListInput, TaskList } from './components';
import React, { useState } from 'react';

import { View } from 'react-native';
import { colors } from "./assets/colors";
import { styles } from './styles';

const App = () => {

  const {black, grey, violet, pink, orange, lightBlue, yellow, blue} = colors;

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
    <View style={styles.container}>
      <ListInput 
        buttonColor={violet}
        buttonText='Add'
        onChangeInputHandler={onChangeInputHandler}
        onPressAddHandler={onPressAddHandler}
        placeholder='add a new task'
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

export default App;