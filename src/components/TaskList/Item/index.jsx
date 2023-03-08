import { Text, TouchableOpacity } from 'react-native'

import React from "react";
import { styles } from './styles';

const TaskItem = (props) => {

  const { item, onHandleModal, className } = props;

  function styleName(){
    switch (className) {
      case "general" : return "general"

      case "shopping" : return "shopping" 

      case "toDo" : return "toDo" 

      default:
        break;
    }
  };

  return (
    <TouchableOpacity
      style={styles[styleName()].listItemContainer}
      onPress={ () => onHandleModal(item) }
    >
      <Text style={styles[styleName()].listItem}>{item.value}</Text>
    </TouchableOpacity>
  )
  
}

export default TaskItem;