import { ActivityIndicator, View } from 'react-native';
import { General, Menu } from './screens/index'
import React, { useState } from 'react';

import { Header } from './components/index'
import { colors } from './assets/colors';
import { styles } from './styles';
import { useFonts } from "expo-font"

const App = () => {

  let content;

  const [loaded] = useFonts({
    'IBMPlexMono-Thin': require('./assets/fonts/IBMPlexMono-Thin.ttf'),
    'IBMPlexMono-ThinItalic': require('./assets/fonts/IBMPlexMono-ThinItalic.ttf'),
    'IBMPlexMono-ExtraLight': require('./assets/fonts/IBMPlexMono-ExtraLight.ttf'),
    'IBMPlexMono-ExtraLightItalic': require('./assets/fonts/IBMPlexMono-ExtraLightItalic.ttf'),
    'IBMPlexMono-Light': require('./assets/fonts/IBMPlexMono-Light.ttf'),
    'IBMPlexMono-LightItalic': require('./assets/fonts/IBMPlexMono-LightItalic.ttf'),
    'IBMPlexMono-Regular': require('./assets/fonts/IBMPlexMono-Regular.ttf'),
    'IBMPlexMono-RegularItalic': require('./assets/fonts/IBMPlexMono-Italic.ttf'),
    'IBMPlexMono-Medium': require('./assets/fonts/IBMPlexMono-Medium.ttf'),
    'IBMPlexMono-MediumItalic': require('./assets/fonts/IBMPlexMono-MediumItalic.ttf'),
    'IBMPlexMono-SemiBold': require('./assets/fonts/IBMPlexMono-SemiBold.ttf'),
    'IBMPlexMono-SemiBoldItalic': require('./assets/fonts/IBMPlexMono-SemiBoldItalic.ttf'),
    'IBMPlexMono-Bold': require('./assets/fonts/IBMPlexMono-Bold.ttf'),
    'IBMPlexMono-BoldItalic': require('./assets/fonts/IBMPlexMono-BoldItalic.ttf')
  });

  // if (!loaded) {
  //   return(
  //     <View style={styles.containerLoader}>
  //       <ActivityIndicator size='large' colors={colors.light.orange} />
  //     </View>
  //   )
  // };

  const [screen, setScreen] = useState(0);

  const onPressMenuHandler = () => {
    setScreen(1);
  };

  const onPressHeaderHandler = () => {
    setScreen(0);
  };

  switch (screen) {
    case 0:
      content = <Menu
                  onPress={onPressMenuHandler}
                  btnText="General Notes"
                />;
    break;
    case 1:
      content = <General />;
    break;
    // case 2:
      // content = <General />
    // break;
    // case 3:
      // content = <General />
    // break;
  }

  
  return (
    <View style={styles.container}>
      <Header
        headerText='NotePad'
        onPress={onPressHeaderHandler}
      />
      {content}
    </View>
  );
};

export default App;