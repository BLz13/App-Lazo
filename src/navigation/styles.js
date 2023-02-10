import { COLOURS } from "../assets/COLOURS"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerStyle:{
        backgroundColor:COLOURS.light.grey,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        elevation: 24,
    },
    headerTintColor: COLOURS.light.orange ,
    headerTitleStyle:{
        textAlign: "center",
        fontFamily: "MediumItalic",
    },
});