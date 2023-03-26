import { Text, TouchableOpacity, useColorScheme } from 'react-native'

import { COLOURS } from '../../../assets/COLOURS';
import React from "react";
import { styles } from './styles';

const TaskItem = (props) => {

  const { item, onHandleModal, currentScreen } = props;
  
  const theme = ( useColorScheme() === "light" ? "light" : "dark" );

  function textColors() {
    switch (currentScreen) {
        case "general" : return (
            (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].alt
        )
        case "shopping" : return (
            (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].alt
        )

        case "toDo" : return (
            (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].alt
        )

        default: return (
            (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].alt
        )
    };
  };

  function borderColors(){
    switch (currentScreen) {
        case "general" : return (
            (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].alt
        )
        case "shopping" : return (
            (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].alt
        )

        case "toDo" : return (
            (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].alt
        )

        default: return (
            (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].alt
        )
    };
  };

  return (
    <TouchableOpacity style={styles.listItemContainer} onPress={ () => onHandleModal(item) } >
      <Text
          style={[
              styles.listItem, {
                color: textColors(), 
                borderColor: borderColors()
              }
            ]}
      >
          {item.value}
      </Text>
    </TouchableOpacity>
  )
  
}

export default TaskItem;