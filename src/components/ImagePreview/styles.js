import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalBack:{
        alignSelf: "center",
        alignItems: "center",
        backgroundColor: "#0002",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    modalBackCancel:{
        position: "absolute",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    modalContainer:{
        borderRadius: 30,
        paddingVertical: 20,
        paddingHorizontal: 10,
        aspectRatio: 1,
        elevation: 24,
        width: "95%",
        display: "flex",
        backgroundColor: "white",
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        top: Dimensions.get('window').height * 0.25
    },
    previewImage:{
        width: "100%",
        height: "80%",
        borderRadius: 30
    },
    previewText: {
        textAlign: "justify",
        fontFamily: "Italic"
    }
})