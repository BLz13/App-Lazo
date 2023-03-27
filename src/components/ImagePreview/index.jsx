import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles"

const ImagePreview = (props) => {

    const { isImageVisible, onPressCancelImageShow, item } = props;

    return (
        <Modal
            visible={isImageVisible}
            animationType='fade'
            transparent={true}
            statusBarTranslucent={true}
        >
            <View style={styles.modalBack}>
                <TouchableOpacity
                        onPress={ () => onPressCancelImageShow() }
                        style={styles.modalBackCancel}
                />
                <View style={styles.modalContainer}>
                    <Image
                        style={styles.previewImage}
                        height={9}
                        width={16}
                        source={{ uri: item.image }}
                    />
                    <Text style={styles.previewText}> "{item.value}" </Text>
                </View>
            </View>
      </Modal>
    )
};

export default ImagePreview;

