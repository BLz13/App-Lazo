import { Button, TextInput, View } from 'react-native';

import React from 'react';
import { styles } from './styles'

const ListInput = (props) => {

    const {placeholder, buttonText, inputValue, onChangeInputHandler, buttonColor, onPressAddHandler} = props

    return(
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.textInput}
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