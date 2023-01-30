import { FlatList } from "react-native";
import React from "react";
import TaskItem from "./Item";
import { styles } from "./styles";

const TaskList = (props) => {

    const {list, onHandleModal} = props;

    const renderItemList =  ({item}) => (
      <TaskItem
        onHandleModal={onHandleModal}
        item={item}
      />
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