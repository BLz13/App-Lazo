import { Button, Modal, Text, View } from 'react-native'

import React from "react";
import { styles } from "./styles";

const CustomModal = (props) => {

    const { isModalVisible, selectedItem, cancelColor, cancelTitle, deleteColor, deleteTitle, onPressCancel, onPressDelete} = props;

    return (
        <Modal visible={isModalVisible} animationType='slide'>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}> Tasklist item selected </Text>
            <View style={styles.modalDetailContainer}>
              <Text style={styles.modalDetailMessage}> Do you want to delate the next item? </Text>
              <Text style={styles.modalSelectedItem}> {selectedItem?.value} </Text>
            </View>
            <View style={styles.modalButtonsContainer}>
              <Button
                color={cancelColor}
                title={cancelTitle}
                onPress={onPressCancel}
              />
              <Button
                color={deleteColor}
                title={deleteTitle}
                onPress={onPressDelete}
              />
            </View>
          </View>
      </Modal>
    )
};

export default CustomModal;