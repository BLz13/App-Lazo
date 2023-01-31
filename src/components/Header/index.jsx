import { Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Header = (props) => {

    const {headerText, onPress} = props;

    return(
        <TouchableOpacity
        style={styles.headerContainer}
        onPress={onPress}
      >
        <Text style={styles.headerText}>{headerText}</Text>
      </TouchableOpacity>
    )
}

export default Header;