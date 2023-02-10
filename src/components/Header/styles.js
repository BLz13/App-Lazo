import { COLOURS } from "../../assets/COLOURS"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignSelf:"center",
        width: '93%',
        marginTop:25,
        height: 70,
        paddingLeft: '10%',
        backgroundColor: COLOURS.light.orange,
        borderRadius:25,
    },
    headerText:{
        color: COLOURS.light.grey,
        textShadowColor: COLOURS.light.black,
        textShadowOffset:{
            width:3,
            height:2,
        },
        textShadowRadius:7,
        fontSize: 20,
        textAlign: "left",
        fontFamily:"MediumItalic",
    }
});