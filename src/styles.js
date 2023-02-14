import { StatusBar, StyleSheet } from "react-native";

import { COLOURS } from "./assets/COLOURS"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    height:'100%',
    backgroundColor: COLOURS.light.grey,
    paddingTop: StatusBar.currentHeight,
    },
    containerLoader:{
      flex: 1,
      width:'100%',
      height:'100%',
      alignItems:"center",
      justifyContent:"center",
      backgroundColor: COLOURS.light.grey,
      paddingTop: StatusBar.currentHeight,
    },
});