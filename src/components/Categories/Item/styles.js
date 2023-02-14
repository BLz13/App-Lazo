import { COLOURS } from "../../../assets/COLOURS"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listCategoryContainer:{
        backgroundColor: COLOURS.light.violet,
        flex: 1,
        borderRadius: 50,
        padding: 20,
        margin: 10,
        alignSelf: "stretch",
    },
    categoryTitle:{
        alignSelf:'center',
        fontFamily: 'SemiBold',
        color: COLOURS.light.grey,
    },
    categoryDescription:{
        alignSelf:'center',
        textTransform: "capitalize",
        fontSize: 12,
        fontFamily: 'Italic',
        color: COLOURS.light.grey,
    },
});