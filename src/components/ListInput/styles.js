import { COLOURS } from "../../assets/COLOURS"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  general:{
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
      borderColor: COLOURS.light.violet,
    },
    textInput:{
      width: '70%',
      height: 40,
      color: COLOURS.light.black,
      opacity: 0.7,
    }
  },

  shopping:{
    inputContainer:{
      flex: 1,
      flexDirection:'row',
      flexWrap:'nowrap',
      maxHeight: 80,
      width:'100%',
      columnGap: 30,
      paddingHorizontal:1,
      alignItems:'center',
      justifyContent:'space-evenly',
    },
    textInput:{
      marginBottom:5,
      width: '70%',
      height: 40,
      color: COLOURS.light.black,
      opacity: 0.7,
      borderBottomWidth:2,
      fontFamily: "Italic",
      borderColor: COLOURS.light.black,
    }
  },

  toDo:{
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
      borderColor: COLOURS.light.violet,
    },
    textInput:{
      width: '70%',
      height: 40,
      color: COLOURS.light.black,
      opacity: 0.7,
    }
}
});