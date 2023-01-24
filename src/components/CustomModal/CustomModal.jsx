import { Button, Modal, Text, View } from 'react-native'

import React from "react";
import { styles } from "./styles";

export const CustomModal = ({ isModalVisible, selectedTask, onHandleCancel, onHandleDelete}) => {
    return (
        <Modal
            visible={isModalVisible}
            animationType='slide'
        >
            <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}> Tasklist Item Selected </Text>
                <View style={styles.modalDetailContainer}>
                    <Text style={styles.modalDetailMessage}> Do you wan't to delate de next item? </Text>
                    <Text style={styles.modalSelectedItem}> {selectedTask?.value} </Text>
                </View>
                <View style={styles.modalButtonsContainer}>
                    <Button title='Cancel' onPress={onHandleCancel} />
                    <Button title='Delete' onPress={onHandleDelete} />
                </View>
            </View>
        </Modal>
    )
}