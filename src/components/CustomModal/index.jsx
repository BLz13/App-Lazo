import { Button, Modal, Text, TouchableOpacity, View } from 'react-native'

import MaterialCommunityIcons   from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { styles } from "./styles";

const CustomModal = (props) => {

    const { isModalVisible, selectedItem, onPressCancel, onPressDelete} = props;

    return (
      <Modal
      visible={isModalVisible}
      animationType='fade'
      transparent={true}
      statusBarTranslucent={true}
      >
        <View style={styles.modalBack}>
          <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>The next note was selected:</Text>
          <Text style={styles.modalSelectedItem}> {`"${selectedItem?.value}"`} </Text>
          <Text style={styles.modalTitle}>Do you want to delete it?</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity onPress={onPressCancel} >
                <MaterialCommunityIcons
                  name={"cancel"}
                  size={40}
                  color={"#c70d0d"}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onPressDelete} >
                <MaterialCommunityIcons
                  name={"trash-can-outline"}
                  size={40}
                  color={"#3cb10e"}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
};

export default CustomModal;