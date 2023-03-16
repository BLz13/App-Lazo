import React, { useState } from 'react';
import { Text, TouchableOpacity, View, useColorScheme } from 'react-native';

import SettingsModal from '../SettingsModal';
import { styles } from './styles';

const Header = () => {
  
  const [isModalVisible, setModalVisible] = useState(false);

  const onPressOpensSettings = () => {
    setModalVisible(!isModalVisible);
  };

  const onPressCloseSettings = () => {
      setModalVisible(!isModalVisible);
  };

    return(
      <View style={styles.headerContainer}>
        <View style={styles.oval} />
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={ () => onPressOpensSettings() }
        >
          <Text style={styles.note}>♪</Text>
          <Text style={styles.headerText}>'It</Text>
        </TouchableOpacity>
        <SettingsModal
          isModalVisible={isModalVisible}
          onPressCloseSettings={onPressCloseSettings}
        />
      </View>
    )
}

export default Header;