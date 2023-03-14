import { StatusBar, StyleSheet } from "react-native";

import { COLOURS } from "../../assets/COLOURS"

export const styles = StyleSheet.create({
    headerContainer:{
        flex: 1,
        marginTop: StatusBar.currentHeight,
        height: StatusBar.currentHeight * 2,
        backfaceVisibility: "hidden",
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        elevation: 24,
        width: "90%",
        zIndex: 1,
    },
    oval:{
        backgroundColor: COLOURS.light.orange,
        alignSelf: "center",
        position: "absolute",
        height: StatusBar.currentHeight,
        aspectRatio: 0.9,
        borderRadius: 10,
        transform: [
            {scale: 40},
            {translateY: -11}
        ],
    },
    settingsButton:{
        display: 'flex',
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        gap: 3
    },
    note:{
        color: COLOURS.light.black,
        textAlign: "center",
        fontSize: 30,
        fontFamily:"BoldItalic",
    },
    headerText:{
        color: COLOURS.light.black,
        textAlign: "center",
        fontSize: 20,
        fontFamily:"BoldItalic",
        verticalAlign: "middle"
    }
});