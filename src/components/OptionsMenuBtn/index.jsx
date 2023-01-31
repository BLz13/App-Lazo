import { Text, TouchableOpacity } from 'react-native'

import React from "react";
import { styles } from './styles';

const OptionsMenuBtn = (props) => {

  const { onPress, btnText } = props;

    return (
      <TouchableOpacity
        style={styles.listItemContainer}
        onPress={onPress}
      >
        <Text style={styles.listItem}>{btnText}</Text>
      </TouchableOpacity>
    )
}

export default OptionsMenuBtn;