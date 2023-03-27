import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalBack:{
        alignSelf:'center',
        alignItems: "center",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#0002'
    },
    modalContainer:{
        borderRadius: 30,
        paddingVertical: 40,
        paddingHorizontal: 20,
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
        top: Dimensions.get('window').height - (Dimensions.get('window').width * 0.96),
    },
    previewBox: {
        width: "90%",
        aspectRatio: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    previewImage:{
        width: "100%",
        height: "100%"
    },
    cancelIcon:{
        position:"absolute",
        top: 10,
        right: 10
    }
})