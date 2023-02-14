import { COLOURS } from "../assets/COLOURS"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerStyle:{
        backgroundColor:COLOURS.light.grey,
        shadowColor: COLOURS.light.black,
        elevation: 24,
    },
    headerTintColor: COLOURS.light.orange ,
    headerTitleStyle:{
        textAlign: "center",
        fontFamily: "MediumItalic",
    },
});