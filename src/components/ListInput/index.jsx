import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';

import { COLOURS } from '../../assets/COLOURS';
import { ImageSelector } from '../../components/index';
import MaterialCommunityIcons   from "@expo/vector-icons/MaterialCommunityIcons";
import { styles }  from './styles'

const ListInput = (props) => {

    const { onChangeInputHandler, onPressAddHandler, inputValue, currentScreen } = props;
    
    const [isCameraModalVisible, setCameraModalVisible] = useState(false);
    
    const theme = ( useColorScheme() === "light" ? "light" : "dark" );

    const onHandleCameraModal = () => {
        setCameraModalVisible(!isCameraModalVisible);
    };

    const onPressCancelCamera = () => {
        setCameraModalVisible(!isCameraModalVisible);
    };

    function placeholderText() {
        switch (currentScreen) {
            case "general": return ("Add new note");            
            case "shopping": return ("Add new item");
            case "toDo": return ("Add new task");          
            default: return ("Add new note");
        }
    }

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
  }

    function iconsActiveColors() {
        switch (currentScreen) {
            case "general" : return (
                (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].cream
            )
            case "shopping" : return (
                (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].cream
            )

            case "toDo" : return (
                (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].cream
            )

            default: return (
                (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].cream
            )
        };
    }

    function iconsInactiveColors() {
        switch (currentScreen){
            case "general" : return (
                (theme === "light") ? COLOURS[theme].lightGrey : COLOURS[theme].grey
            )
            case "shopping" : return (
                (theme === "light") ? COLOURS[theme].lightGrey : COLOURS[theme].theme
            )

            case "toDo" : return (
                (theme === "light") ? COLOURS[theme].lightGrey : COLOURS[theme].theme
            )

            default: return (
              (theme === "light") ? COLOURS[theme].lightGrey : COLOURS[theme].grey
            )
        };
    }

    return(
      <View style={[styles.inputContainer]}>
          <TextInput
            style={[
              styles.textInput, {
                color: textColors(),
                borderColor: textColors()
              }
            ]}
            placeholder={placeholderText()}
            autoComplete="off"
            value={inputValue}
            onChangeText={onChangeInputHandler}
          />
          <TouchableOpacity onPress={ () => onHandleCameraModal() } >
              <MaterialCommunityIcons
                  name={"camera-plus-outline"}
                  size={25}
                  color={iconsActiveColors()}
              />
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => onPressAddHandler() } disabled={!inputValue} >
              <MaterialCommunityIcons
                  name={"plus-box-outline"}
                  size={25}
                  color={ inputValue ? iconsActiveColors() : iconsInactiveColors() }
              />
          </TouchableOpacity>
          <ImageSelector
              isCameraModalVisible={isCameraModalVisible}
              onPressCancelCamera={ () => onPressCancelCamera() }
              setCameraModalVisible={setCameraModalVisible}
              currentScreen={currentScreen}
          />
      </View>
    )
};

export default ListInput;