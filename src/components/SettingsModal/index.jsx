import { Button, Modal, Text, TouchableOpacity, View } from 'react-native'

import { COLOURS } from '../../assets/COLOURS';
import MaterialCommunityIcons   from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { styles } from "./styles";

const SettingsModal = (props) => {

    const { isModalVisible, onPressCloseSettings } = props;

    return (
        <Modal
          visible={isModalVisible}
          animationType='fade'
          transparent={true}
          statusBarTranslucent={true}
        >
          <View style={styles.modalBack}>
            <View style={styles.modalContainer}>
                <TouchableOpacity onPress={onPressCloseSettings} >
                    <MaterialCommunityIcons
                        name={"cancel"}
                        size={40}
                        color={"#c70d0d"}
                    />
                </TouchableOpacity>
            </View>
          </View>
      </Modal>
    )
};

export default SettingsModal;