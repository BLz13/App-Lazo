import { Button, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { COLOURS } from '../../assets/COLOURS';
import { ImageSelector } from '../../components/index';
import MaterialCommunityIcons   from "@expo/vector-icons/MaterialCommunityIcons";
import { styles }  from './styles'

const ListInput = (props) => {

    const { onChangeInputHandler, onPressAddHandler, inputValue, className } = props;
    
    const [isCameraModalVisible, setCameraModalVisible] = useState(false);

    const onHandleCameraModal = () => {
      setCameraModalVisible(!isCameraModalVisible);
    };

    const onPressCancelCamera = () => {
      setCameraModalVisible(!isCameraModalVisible);
    };

    const onImage = (uri) => {};

    function placeholderText() {
      switch (className) {

        case "general": return ("Add new note");
        
        case "shopping": return ("Add new item");

        case "toDo": return ("Add new task");
      
        default: return ("Add new note");
      }
    }

    return(
      <>
        <View style={[styles.inputContainer]}>
          <TextInput 
            style={[styles.textInput]}
            placeholder={placeholderText()}
            autoComplete="off"
            value={inputValue}
            onChangeText={onChangeInputHandler}
          />
          <TouchableOpacity
            style={[styles.inputIcons]}
            onPress={onHandleCameraModal}
          >
            <MaterialCommunityIcons
              name={"camera-outline"}
              size={25}
              color={COLOURS.light.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.inputIcons]}
            onPress={onPressAddHandler}
            disabled={!inputValue}
          >
            <MaterialCommunityIcons
              name={"plus-box-outline"}
              size={25}
              color={ inputValue ? COLOURS.light.black : COLOURS.light.grey }
            />
          </TouchableOpacity>
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