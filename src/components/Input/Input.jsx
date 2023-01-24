import { Button, TextInput, View } from 'react-native';

import React from 'react';
import { styles } from './styles'

export const AddItem = ({ 
    placeholder, 
    task, 
    onHandlerChange, 
    buttonText, 
    buttonColor, 
    onHandlerSubmit
}) => {
    return(
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.textInput}
                placeholder={placeholder}
                autoComplete="off"
                value={task}
                onChange={onHandlerChange}
            />
            <Button
                disabled={!task}
                title={buttonText}
                onPress={onHandlerSubmit}
                color={buttonColor}
            />
        </View>
    )
}