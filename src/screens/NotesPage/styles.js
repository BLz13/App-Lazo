import { StyleSheet } from "react-native";
import { styles as bottomTabStyles } from '../../navigation/styles';
import { styles as headerStyles } from '../../components/Header/styles';

export const styles = StyleSheet.create({
   appContainer: {
      flex: 1,
      padding: 30,
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: headerStyles.headerContainer.height + headerStyles.headerContainer.marginTop + 40,
      paddingBottom: bottomTabStyles.tabBar.height + bottomTabStyles.tabBar.marginBottom + 40,
    },
});