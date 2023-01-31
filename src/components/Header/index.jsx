import { Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const Header = (props) => {

    const {headerText} = props;

    return(
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{headerText}</Text>
        </View>
    )
}

export default Header;