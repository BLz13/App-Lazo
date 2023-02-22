import { Text, TouchableOpacity } from 'react-native'

import React from "react";
import { styles } from './styles';

const TaskItem = (props) => {

  const { item, onHandleModal } = props;

  return (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={ () => onHandleModal(item) }
    >
      <Text style={styles.listItem}>{item.value}</Text>
    </TouchableOpacity>
  )
  
}

export default TaskItem;