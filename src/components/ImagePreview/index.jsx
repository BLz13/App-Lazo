import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Modal, Text, TouchableOpacity, View, useColorScheme } from "react-native";

import { COLOURS } from "../../assets/COLOURS"
import MaterialCommunityIcons   from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { styles } from "./styles"

const ImagePreview = (props) => {

    const { isImageVisible, onPressCancelImageShow, onHandleModal, item } = props;

    const theme = ( useColorScheme() === "light" ? "light" : "dark" )

    return (
        <Modal
            visible={isImageVisible}
            animationType='fade'
            transparent={true}
            statusBarTranslucent={true}
        >
          <View style={styles.modalBack}>
            <View style={styles.modalContainer}>
                <TouchableOpacity
                    onPress={ () => onHandleModal(item) }
                    style={styles.previewBox}
                >
                    <Image
                        style={styles.previewImage}
                        height={9}
                        width={16}
                        source={{ uri: item.url }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => onPressCancelImageShow() }
                    style={styles.cancelIcon}
                >
                    <MaterialCommunityIcons
                        name={"window-close"}
                        size={22}
                        color={COLOURS[theme].black}
                    />
                </TouchableOpacity>
            </View>
        </View>
      </Modal>
    )
};

export default ImagePreview;

