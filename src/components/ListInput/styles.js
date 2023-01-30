import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors"

export const styles = StyleSheet.create({
  inputContainer:{
    flex: 1,
    flexDirection:'row',
    flexWrap:'nowrap',
    maxHeight: 80,
    width:'100%',
    borderRadius: 50,
    columnGap: 30,
    paddingHorizontal:5,
    alignItems:'center',
    justifyContent:'space-evenly',
    borderWidth:2,
    borderColor: colors.violet,
  },
  textInput:{
    width: '70%',
    height: 40,
    color: colors.black,
    opacity: 0.7,
  }, 
});