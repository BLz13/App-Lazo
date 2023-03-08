import { Button, TextInput, View } from 'react-native';

import React from 'react';
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
        <View style={styles[styleName()].inputContainer}>
          <TextInput 
            style={styles[styleName()].textInput}
            placeholder={placeholder}
            autoComplete="off"
            value={inputValue}
            onChangeText={onChangeInputHandler}
          />
          <Button
            disabled={!inputValue}
            title={buttonText}
            onPress={onPressAddHandler}
            color={buttonColor}
          />
      </View>
    )
};

export default ListInput;