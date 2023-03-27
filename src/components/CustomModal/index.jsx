import { Modal, Text, TouchableOpacity, View, useColorScheme } from 'react-native'

import { COLOURS } from '../../assets/COLOURS';
import MaterialCommunityIcons   from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { styles } from "./styles";

const CustomModal = (props) => {

    const { isModalVisible, selectedItem, onPressCancel, onPressDelete} = props;

    const theme = useColorScheme() === "light" ? "light" : "dark"

    function renderItem(){
      if (!selectedItem) {return ""} { return `"${selectedItem.value}"`}
    };

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
          <Text style={styles.modalSelectedItem}> {renderItem()} </Text>
          <Text style={styles.modalTitle}>Do you want to delete it?</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity onPress={ () => onPressCancel() }>
                <MaterialCommunityIcons
                  name={"cancel"}
                  size={40}
                  color={COLOURS[theme].red}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => onPressDelete() }>
                <MaterialCommunityIcons
                  name={"trash-can-outline"}
                  size={40}
                  color={COLOURS[theme].green}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
};

export default CustomModal;