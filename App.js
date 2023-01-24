import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

const black ='#1E1B18';
const grey ='#E1DEE3';
const violet ='#987284';
const pink ='#EE7674';
const orange ='#F5853F';

export default function App() {

  const [inputValue, setInputValue] = useState("");

  const [isModalVisible, setModalVisible] = useState(false);

  const [list, setList] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);

  const renderItemList = ( {item} ) => (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={ () => onHandleModal(item) }
    >
      <Text style={styles.listItem}>{item.value}</Text>
    </TouchableOpacity>
  );

  const keyExtractorList =  ( {item} ) => {item.id}

  function onChangeInputHandler(inputText){
    setInputValue(inputText);
  };

  function onPressButtonHandler(){
    setList([
      ...list,
      {
        id: Math.random().toString(),
        value: inputValue,
      }
    ])
  };

  function onHandleModal(item){
    setModalVisible(!isModalVisible);
    setSelectedItem(item);
  };

  function onPressCancel(){
    setModalVisible(!isModalVisible);
    setSelectedItem(null);
  }

  function onPressDelete(){
    setList( (prevItemsList) => prevItemsList.filter( (item) => item.id !== selectedItem.id));
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder="What's left to do?"
          autoComplete="off"
          value={inputValue}
          onChange={onChangeInputHandler}
        />
        <Button
          disabled={!inputValue}
          title="Add"
          onPress={onPressButtonHandler}
          color={grey}
        />
      </View>
      <FlatList 
        style={styles.listContainer}
        data={list}
        renderItem={renderItemList}
        keyExtractor={keyExtractorList}
      />
      <Modal
        visible={isModalVisible}
        animationType='slide'
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}> Tasklist item selected </Text>
          <View style={styles.modalDetailContainer}>
            <Text style={styles.modalDetailMessage}> Do you wan't to delate de next item? </Text>
            <Text style={styles.modalSelectedItem}> {selectedItem?.value} </Text>
          </View>
          <View style={styles.modalButtonsContainer}>
            <Button
              title='Cancel'
              onPress={onPressCancel}
            />
            <Button
              title='Delete'
              onPress={onPressDelete}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 45,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: black,
  },
  inputContainer:{
    flex: 1,
    flexDirection:'row',
    flexWrap:'nowrap',
    maxHeight:90,
    alignItems:'center',
    justifyContent:'space-evenly',
    gap:20,
  },
  textInput:{
    width: '80%',
    height: 50,
    backgroundColor: grey,
  },
  // listContainer{},
  // listItemContainer{},
  // listItem{},
  // modalContainer{},
  // modalTitle{},
  // modalDetailContainer{},
  // modalDetailMessage{},
  // modalSelectedItem{},  
});
