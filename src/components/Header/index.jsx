import { Text, TouchableOpacity, View, useColorScheme } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Header = (props) => {

    return(
      <View style={styles.headerContainer}>
        <View style={styles.oval} />
        <TouchableOpacity
          style={styles.settingsButton}
          // onPress={onPress}
        >
          <Text style={styles.note}>♪</Text>
          <Text style={styles.headerText}>'It</Text>
        </TouchableOpacity>
      </View>
    )
}

export default Header;