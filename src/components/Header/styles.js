import { StatusBar, StyleSheet } from "react-native";

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
        width: "90%",
        zIndex: 1,
    },
    oval:{
        alignSelf: "center",
        position: "absolute",
        height: StatusBar.currentHeight,
        aspectRatio: 0.9,
        borderRadius: 10,
        elevation: 24,
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
        textAlign: "center",
        fontSize: 30,
        fontFamily:"BoldItalic",
    },
    headerText:{
        textAlign: "center",
        fontSize: 20,
        fontFamily:"BoldItalic",
        verticalAlign: "middle"
    }
});