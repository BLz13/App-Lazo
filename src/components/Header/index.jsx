import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { COLOURS } from '../../assets/COLOURS';
import SettingsModal from '../SettingsModal';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const Header = (props) => {

  const { currentScreen } = props;
  
  const [isModalVisible, setModalVisible] = useState(false);

  const theme = useSelector( (state) => state.appSettings.appTheme);

  const onPressOpensSettings = () => {
    setModalVisible(!isModalVisible);
  };

  const onPressCloseSettings = () => {
      setModalVisible(!isModalVisible);
  };

  function currentColor(){
    switch (currentScreen) {
      case "general" : return COLOURS[theme].theme;

      case "shopping" : return COLOURS[theme].alt;

      case "toDo" : return COLOURS[theme].theme;

      default: return COLOURS[theme].theme;
    }
};

    return(
      <View style={[{}, styles.headerContainer]}>
        <View style={[{backgroundColor: currentColor()}, styles.oval]} />
        <TouchableOpacity
          style={[{}, styles.settingsButton]}
          onPress={ () => onPressOpensSettings() }
        >
          <Text style={[{}, styles.note]}>♪</Text>
          <Text style={[{}, styles.headerText]}>'It</Text>
        </TouchableOpacity>
        <SettingsModal
          isModalVisible={isModalVisible}
          onPressCloseSettings={onPressCloseSettings}
        />
      </View>
    )
}

export default Header;