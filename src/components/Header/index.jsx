import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { COLOURS } from '../../assets/COLOURS';
import SettingsModal from '../SettingsModal';
import { styles } from './styles';

const Header = (props) => {

  const { currentScreen, theme } = props;
  
  const [isModalVisible, setModalVisible] = useState(false);

  const onPressOpensSettings = () => {
    setModalVisible(!isModalVisible);
  };

  const onPressCloseSettings = () => {
      setModalVisible(!isModalVisible);
  };

  function currentColor(){
    switch (currentScreen) {
      case "general" : return (
          (theme === "light") ? {backgroundColor: COLOURS[theme].theme} : {backgroundColor: COLOURS[theme].darkGrey}
      )
      case "shopping" : return (
          (theme === "light") ? {backgroundColor: COLOURS[theme].theme} : {backgroundColor: COLOURS[theme].grey}
      )

      case "toDo" : return (
          (theme === "light") ? {backgroundColor: COLOURS[theme].theme} : {backgroundColor: COLOURS[theme].theme}
      )

      default: return (
          (theme === "light") ? {backgroundColor: COLOURS[theme].theme} : {backgroundColor: COLOURS[theme].darkGrey}
      )
  };
  };

  function textColor(){
    switch (currentScreen) {
      case "general" : return (
          (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].cream
      )
      case "shopping" : return (
          (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].cream
      )

      case "toDo" : return (
          (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].cream
      )

      default: return (
          (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].cream
      )
  };
  };

    return(
      <View style={[{}, styles.headerContainer]}>
        <View style={[currentColor(), styles.oval]} />
        <TouchableOpacity
          style={[{}, styles.settingsButton]}
          onPress={ () => onPressOpensSettings() }
        >
          <Text style={[{color: textColor()}, styles.note]}>♪</Text>
          <Text style={[{color: textColor()}, styles.headerText]}>'It</Text>
        </TouchableOpacity>
        <SettingsModal
          isModalVisible={isModalVisible}
          onPressCloseSettings={onPressCloseSettings}
        />
      </View>
    )
}

export default Header;