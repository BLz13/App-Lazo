import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Modal, Text, View } from "react-native";

import { COLOURS } from "../../assets/COLOURS"
import React from "react";
import { styles } from "./styles"
import { useState } from "react";

const ImageSelector = (props) => {

    const { onImage, isCameraModalVisible, onPressCancelCamera } = props;
    
    const [pickedUrl, setPickedUrl] = useState(null)

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
            Alert.alert("You have not given access to the camera", [{ text:"Ok" }]);
            return false;
        }
        return true;
    };

    const onHandlePressImage = async () => {
        const isCameraOn = await verifyPermissions();
        if (!isCameraOn) return;
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 0.7,
        });
        setPickedUrl(image.uri);
        onImage(image.uri);
        console.log(pickedUrl);
    };

    return (
        <Modal visible={isCameraModalVisible} animationType='slide'>
          <View style={styles.container}>
            <View style={styles.preview}>
                {!pickedUrl ? (
                    <Text>There isn't an image selected yet</Text>
                ) : (
                    <Image style={styles.image} source={{ uri: pickedUrl }} />
                )}
            </View>
            <Button
                title="Select an Image"
                color={COLOURS.light.violet}
                onPress={onHandlePressImage}
            />
            <Button
              color={COLOURS.light.pink}
              title={"Save Image"}
            //   onPress={onPressCancel}
            />            
            <Button
                color={COLOURS.light.orange}
                title={"Cancel"}
                onPress={onPressCancelCamera}
              />
        </View>
      </Modal>
    )
};

export default ImageSelector;

