import { StatusBar, StyleSheet } from "react-native";

import { COLOURS } from "./assets/COLOURS"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLOURS.light.grey,
    },
    containerLoader:{
      flex: 1,
      width:'100%',
      height:'100%',
      paddingTop: StatusBar.currentHeight,
      alignItems:"center",
      justifyContent:"center",
    }
});