import { Dimensions, StyleSheet, useColorScheme } from "react-native";

import { COLOURS } from "../../assets/COLOURS"

export const styles = StyleSheet.create({
  modalBack:{
    alignSelf:'center',
    flex: 1,
    alignItems: "center",
    width: '100%',
    backgroundColor: '#0002'
  },
  modalContainer:{
    top: Dimensions.get('window').height - 450,
    borderRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 20,
    aspectRatio: 1,
    width: "90%",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "space-between"
  },
  modalTitle:{
    textAlign:'center',
    fontSize: 19,
    color: COLOURS.light.pink,
    fontFamily: 'Medium'
  },
  modalSelectedItem:{
    textAlign:'center',
    color: COLOURS.light.black,
    fontFamily: 'Italic'
  },  
  modalButtonsContainer:{
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    justifyContent: "space-evenly",
    width: "100%",
  } 
  });