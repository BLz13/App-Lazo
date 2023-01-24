import { FlatList } from "react-native";
import React from "react";
import TaskItem from "./Item/TaskItem";
import { styles } from "./styles";

export const TaskList = ({ tasks, onHandlerModal}) => {

    const renderItem = ({ item }) => (
        <TaskItem 
            item={item}
            onHandlerModal={onHandlerModal}
        />
      )
    
    const keyExtractor = (item) => item.id;

    return (
        <FlatList 
            style={styles.listContainer}
            data={tasks}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )
}
export default TaskList;