import { FlatList } from "react-native";
import React from "react";
import TaskItem from "./Item";
import { styles } from "./styles";

const TaskList = (props) => {

    const {list, onHandleModal, currentScreen} = props;

    const renderItemList =  ({item}) => (
      <TaskItem onHandleModal={onHandleModal} item={item} currentScreen={currentScreen}  />
    );
    
    const keyExtractorList =  ( item ) => item.id;

    return (
        <FlatList 
            style={styles.listContainer}
            data={list}
            renderItem={renderItemList}
            keyExtractor={keyExtractorList}
        />
    )
}
export default TaskList;