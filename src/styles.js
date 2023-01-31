import { StyleSheet } from "react-native";
import { colors } from "./assets/colors"

export const styles = StyleSheet.create({
    containerLoader:{
      display:"flex",
      flex:10,
      alignItems:"center",
      justifyContent:"center",
    },
    container: {
      width:'100%',
      height:'100%',
      backgroundColor: colors.light.grey,
    }
});