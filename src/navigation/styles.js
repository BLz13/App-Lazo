import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tabBar:{
        height: Dimensions.get('window').height / 10,
        marginBottom: Dimensions.get('window').height / 92,
        width: "95%",
        position: "absolute",
        left: "2.5%",
        borderRadius: 50,
        overflow: "hidden",
        elevation: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
    }
 });