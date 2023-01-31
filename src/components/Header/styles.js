import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors"

export const styles = StyleSheet.create({
    headerContainer:{
        display:"flex",
        flex:1,
        justifyContent:"center",
        alignSelf:"center",
        width: '93%',
        height: 70,
        marginTop:30,
        paddingLeft: '10%',
        backgroundColor: colors.light.orange,
        borderRadius:10,
        elevation: 24,
    },
    headerText:{
        color: colors.light.grey,
        textShadowColor: colors.light.black,
        textShadowOffset:{
            width:3,
            height:2,
        },
        textShadowRadius:7,
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "left",
    }
});