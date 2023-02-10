import { COLOURS } from "../../assets/COLOURS"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer:{
    alignSelf:'center',
    flex: 1,
  },
  modalTitle:{
    marginVertical: 20,
    textAlign:'center',
    textTransform: 'capitalize',
    fontSize: 25,
    color: COLOURS.light.pink,
  },
  modalDetailContainer:{
    flex: 1,
  },
  modalDetailMessage:{
    marginVertical: 20,
    textAlign:'center',
    textTransform: 'capitalize',
    fontSize: 20,
    color: COLOURS.light.orange,
  },
  modalSelectedItem:{
    marginVertical: 20,
    textAlign:'center',
    color: COLOURS.light.black,
  },  
  modalButtonsContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-evenly',
    width: '100%',
  } 
  });