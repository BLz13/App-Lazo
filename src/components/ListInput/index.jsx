import { Button, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { COLOURS } from '../../assets/COLOURS';
import { ImageSelector } from '../../components/index';
import MaterialCommunityIcons   from "@expo/vector-icons/MaterialCommunityIcons";
import { styles }  from './styles'

const ListInput = (props) => {

    const {
      buttonColor,
      buttonText,
      onChangeInputHandler,
      onPressAddHandler,
      placeholder,
      inputValue,
      className
    } = props;
    
    const [isCameraModalVisible, setCameraModalVisible] = useState(false);

    const onHandleCameraModal = () => {
      setCameraModalVisible(!isCameraModalVisible);
    };

    const onPressCancelCamera = () => {
      setCameraModalVisible(!isCameraModalVisible);
  };

    const onImage = (uri) => {};

    function styleName(){
      switch (className) {
        case "general" : return "general"

        case "shopping" : return "shopping" 

        case "toDo" : return "toDo" 

        default:
          break;
      }
    }

    return(
      <>
        <View style={styles[styleName()].inputContainer}>
          <TextInput 
            style={styles[styleName()].textInput}
            placeholder={placeholder}
            autoComplete="off"
            value={inputValue}
            onChangeText={onChangeInputHandler}
          />
          <TouchableOpacity
            style={styles[styleName()].listItemContainer}
            onPress={ () => onHandleCameraModal() }
          >
            <MaterialCommunityIcons
              name={"camera-outline"}
              size={22}
              color={COLOURS.light.black}
            />
          </TouchableOpacity>
          <Button
            disabled={!inputValue}
            title={buttonText}
            onPress={onPressAddHandler}
            color={buttonColor}
          />
        </View>
        <ImageSelector
          onImage={onImage}
          isCameraModalVisible={isCameraModalVisible}
          onPressCancelCamera={onPressCancelCamera}
        />
      </>
    )
};

export default ListInput;