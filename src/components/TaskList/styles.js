import { StyleSheet } from "react-native";
import { colors } from "../../assets/colors"

export const styles = StyleSheet.create({
  listContainer:{
    marginTop: 20,
    width: '100%',
    flex: 1,
    borderRadius: 20,
  },
  listItemContainer:{
    backgroundColor: colors.violet,
    borderRadius: 50,
    width: '95%',
    padding: 20,
    margin: 10,
    alignSelf: 'center',
  },
  listItem:{
    alignSelf:'center',
    color: colors.grey,
  },
});