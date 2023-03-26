import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
 
  inputContainer:{
    flex: 1,
    flexDirection:'row',
    flexWrap:'nowrap',
    maxHeight: 80,
    width:'100%',
    columnGap: 30,
    paddingHorizontal:1,
    alignItems: 'baseline',
    justifyContent:'space-evenly',
  },
  textInput:{
    paddingBottom: -5,
    width: '70%',
    height: 40,
    opacity: 0.7,
    borderBottomWidth:2,
    fontFamily: "Italic",
  }  
});