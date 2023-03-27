import React, { useState } from "react";
import { Text, TouchableOpacity, View, useColorScheme } from 'react-native'

import { COLOURS } from '../../../assets/COLOURS';
import { ImagePreview } from '../../index';
import MaterialCommunityIcons   from "@expo/vector-icons/MaterialCommunityIcons";
import { styles } from './styles';

const TaskItem = (props) => {

  const { item, onHandleModal, currentScreen } = props;
  
  const theme = ( useColorScheme() === "light" ? "light" : "dark" );
  
  const [isImageVisible, setImageVisibility] = useState(false);

  const onPressShowImageModal = () => {
    setImageVisibility(!isImageVisible);
  };

  const onPressCancelImageShow = () => {
      setImageVisibility(!isImageVisible);
  };

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

  return (item.url === "noImage") ? (
      <TouchableOpacity style={styles.listItemContainer} onPress={ () => onHandleModal(item) } >
          <Text style={[styles.listItem, { color: textColors(), borderColor: borderColors() }]}>
              {item.value}
          </Text>
      </TouchableOpacity>
  ) : (
    <>
        <View style={styles.listImageItem}>
            <TouchableOpacity onPress={ () => onPressShowImageModal() } >
                <MaterialCommunityIcons
                  name={"camera-outline"}
                  size={25}
                  color={textColors()}
                  />
            </TouchableOpacity>
            <TouchableOpacity style={styles.listItemContainer} onPress={ () => onHandleModal(item) } >
              <Text style={[styles.imageText, { color: textColors(), borderColor: borderColors(), textAlignVertical: 'center' }]} >
                  "{item.value}"
              </Text>
            </TouchableOpacity>
        </View>
        <ImagePreview
          isImageVisible={isImageVisible}
          onPressCancelImageShow={onPressCancelImageShow}
          item={item}
        />
    </>
)

}

export default TaskItem;