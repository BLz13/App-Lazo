import { StyleSheet } from "react-native";

const black ='#1E1B18';
const grey ='#E1DEE3';
const violet ='#987284';
const pink ='#EE7674';
const orange ='#F5853F';

export const styles = StyleSheet.create({
    inputContainer:{
      flex: 1,
      flexDirection:'row',
      flexWrap:'nowrap',
      maxHeight:90,
      alignItems:'center',
      justifyContent:'space-evenly',
      gap:20,
    },
    textInput:{
      width: '80%',
      height: 50,
      backgroundColor: grey,
    }, 
  });