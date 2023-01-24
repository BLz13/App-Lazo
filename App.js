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

  const renderItemList =  ({item}) => (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={ () => onHandleModal(item) }
    >
      <Text style={styles.listItem}>{item.value}</Text>
    </TouchableOpacity>
  );

  const keyExtractorList =  ( item ) => item.id;

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
  }

  const onPressDelete = () => {
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
          onChangeText={onChangeInputHandler}
        />
        <Button
          disabled={!inputValue}
          title="Add"
          onPress={onPressAddHandler}
          color={pink}
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
            <Text style={styles.modalDetailMessage}> Do you want to delate the next item? </Text>
            <Text style={styles.modalSelectedItem}> {selectedItem?.value} </Text>
          </View>
          <View style={styles.modalButtonsContainer}>
            <Button
              color={violet}
              title='Cancel'
              onPress={onPressCancel}
            />
            <Button
              color={orange}
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
    backgroundColor: grey,
  },
  inputContainer:{
    flex: 1,
    flexDirection:'row',
    flexWrap:'nowrap',
    maxHeight: 80,
    width:'100%',
    borderRadius: 50,
    columnGap: 30,
    paddingHorizontal:5,
    alignItems:'center',
    justifyContent:'space-evenly',
    borderWidth:2,
    borderColor:violet,
  },
  textInput:{
    width: '70%',
    height: 40,
    color: black,
    opacity: 0.7,
  },
  listContainer:{
    marginTop: 20,
    width: '100%',
    flex: 1,
    borderRadius: 20,
  },
  listItemContainer:{
    backgroundColor: violet,
    borderRadius: 50,
    width: '95%',
    padding: 20,
    margin: 10,
    alignSelf: 'center',
  },
  listItem:{
    alignSelf:'center',
    color: grey,
  },
  modalContainer:{
    alignSelf:'center',
    flex: 1,
  },
  modalTitle:{
    marginVertical: 20,
    textAlign:'center',
    textTransform: 'capitalize',
    fontSize: 25,
    color: pink,
  },
  modalDetailContainer:{
    flex: 1,
  },
  modalDetailMessage:{
    marginVertical: 20,
    textAlign:'center',
    textTransform: 'capitalize',
    fontSize: 20,
    color: orange,
  },
  modalSelectedItem:{
    marginVertical: 20,
    textAlign:'center',
    color: black,
  },  
  modalButtonsContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-evenly',
    width: '100%',
  }
});