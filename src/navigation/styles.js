import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tabBar:{
        height: Dimensions.get('window').height / 10,
        marginBottom: Dimensions.get('window').height / 90,
        width: Dimensions.get('window').width * 0.95,
        position: "absolute",
        left: "2.5%",
        borderRadius: 50,
        elevation: 24,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    tabBarItem: {
        paddingVertical: 18,
        borderRadius: 50,
    },
    tabBarLabelStyle:{
        fontFamily: "Regular",
        fontSize: 11
    }
 });