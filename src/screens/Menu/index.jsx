import React, { useState } from 'react';

import { OptionsMenuBtn } from '../../components/index'
import { View } from 'react-native';
import { colors } from "../../assets/colors";
import { styles } from './styles';

const Menu = (props) => {

    const {onPress} = props

    const {black, grey, violet, pink, orange, lightBlue, yellow, blue} = colors.light;

    return (
        <View style={styles.appContainer}>
            <OptionsMenuBtn onPress={onPress}/>
        </View>
    );
};

export default Menu;