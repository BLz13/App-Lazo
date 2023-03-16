import { COLOURS } from "../../assets/COLOURS"
import { StyleSheet } from "react-native";
import { styles as headerStyles } from '../../components/Header/styles';

export const styles = StyleSheet.create({
   appContainer: {
      flex: 1,
      padding: 30,
      paddingTop: headerStyles.headerContainer.height + headerStyles.headerContainer.marginTop + 40,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: COLOURS.light.grey,
    },
});