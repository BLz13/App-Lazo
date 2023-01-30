import { StyleSheet } from "react-native";
import { colors } from "./assets/colors"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 45,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: colors.black,
      },  
      statusBar:{
        barStyle: 'light-content',
      }
});