import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors"

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
    color: colors.pink,
  },
  modalDetailContainer:{
    flex: 1,
  },
  modalDetailMessage:{
    marginVertical: 20,
    textAlign:'center',
    textTransform: 'capitalize',
    fontSize: 20,
    color: colors.orange,
  },
  modalSelectedItem:{
    marginVertical: 20,
    textAlign:'center',
    color: colors.black,
  },  
  modalButtonsContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-evenly',
    width: '100%',
  } 
  });