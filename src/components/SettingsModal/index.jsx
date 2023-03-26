import { Modal, Text, TouchableOpacity, View, useColorScheme } from 'react-native'

import { COLOURS } from '../../assets/COLOURS';
import MaterialCommunityIcons   from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { styles } from "./styles";

const SettingsModal = (props) => {

  const { isModalVisible, onPressCloseSettings } = props;

  const theme = ( useColorScheme() === "light" ? "light" : "dark")

  return (
    <Modal
      visible={isModalVisible}
      animationType='fade'
      transparent={true}
      statusBarTranslucent={true}
    >
      <View style={styles.modalBack}>
        <View style={styles.modalContainer}>
            <Text style={styles.text}> Made By: BLz13 </Text>
            <TouchableOpacity onPress={onPressCloseSettings} style={styles.cancelIcon}>
                <MaterialCommunityIcons
                    name={"window-close"}
                    size={22}
                    color={COLOURS[theme].red}
                />
            </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
};

export default SettingsModal;