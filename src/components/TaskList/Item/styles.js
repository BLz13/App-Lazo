import { COLOURS } from "../../../assets/COLOURS"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  general:{
    listItemContainer:{
      backgroundColor: COLOURS.light.violet,
      borderRadius: 50,
      width: '95%',
      padding: 20,
      margin: 10,
      alignSelf: 'center',
    },
    listItem:{
      alignSelf:'center',
      color: COLOURS.light.grey,
    },
  },

  shopping:{
    listItemContainer:{
      width: '95%',
      padding: 0,
      paddingLeft: 10,
      margin: 15,
      alignSelf:'center',
      borderBottomWidth: 1
    },
    listItem:{
      color: COLOURS.light.black,
      fontFamily: 'Italic',
      textAlignVertical: 'bottom',
      textAlign: 'left',
    },
  },

  toDo:{
    listItemContainer:{
      backgroundColor: COLOURS.light.violet,
      borderRadius: 50,
      width: '95%',
      padding: 20,
      margin: 10,
      alignSelf: 'center',
    },
    listItem:{
      alignSelf:'center',
      color: COLOURS.light.grey,
    },
}
});