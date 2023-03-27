import * as ImagePicker from "expo-image-picker";

import { Alert, Button, Image, Modal, Text, TextInput, TouchableOpacity, View, useColorScheme } from "react-native";

import { COLOURS } from "../../assets/COLOURS"
import MaterialCommunityIcons   from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { addNote } from "../../redux/note.slice"
import { styles } from "./styles"
import { useDispatch } from 'react-redux';
import { useState } from "react";

const ImageSelector = (props) => {

    const { isCameraModalVisible, onPressCancelCamera, setCameraModalVisible, currentScreen } = props;
    
    const dispatch = useDispatch();

    const [pickedUrl, setPickedUrl] = useState(null);
    
    const [inputValue, setInputValue] = useState("");

    const theme = ( useColorScheme() === "light" ? "light" : "dark" )

    const onChangeInputHandler = (text) => {
        setInputValue(text);
    };

    const onPressSaveImage = () => {
        if (pickedUrl !== null) {
            const payload = {
                noteData:{
                    id: Math.random().toString(),
                    value: inputValue,
                    url: pickedUrl
                },
                currentScreen: currentScreen
            }
            dispatch(addNote(payload));
        };
        setCameraModalVisible(!isCameraModalVisible);
    };

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
    };

    return (
        <Modal
            visible={isCameraModalVisible}
            animationType='fade'
            transparent={true}
            statusBarTranslucent={true}
        >
          <View style={styles.modalBack}>
            <View style={styles.modalContainer}>
                <View style={ !pickedUrl ? styles.noImage : styles.previewBox }>
                    {!pickedUrl ? (
                        <Text style={styles.previewText}>There isn't an image selected yet</Text>
                    ) : (
                        <Image
                            style={styles.previewImage}
                            height={9}
                            width={16}
                            source={{ uri: pickedUrl }}
                        />
                    )}
                </View>
                <TextInput
                    style={[
                    styles.textInput, {
                        color: COLOURS[theme].alt,
                        borderColor: COLOURS[theme].alt
                    }
                    ]}
                    placeholder={"Add a title to the image"}
                    autoComplete="off"
                    value={inputValue}
                    onChangeText={onChangeInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <Button
                        title="Select an Image"
                        color={COLOURS[theme].violet}
                        onPress={ () => onHandlePressImage() }
                    />
                    <Button
                        color={COLOURS[theme].pink}
                        title={"Save Image"}
                        disabled={(!inputValue) || (pickedUrl === null)}
                        onPress={ () => onPressSaveImage(pickedUrl) }
                    />
                </View>
                <TouchableOpacity
                    onPress={ () => onPressCancelCamera() }
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

export default ImageSelector;

