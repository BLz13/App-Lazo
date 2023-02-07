import { ActivityIndicator, View } from 'react-native';

import AppNavigation from "./navigation/index"
import { Header } from './components/index';
import { colors } from './assets/colors';
import { styles } from './styles';
import { useFonts } from "expo-font"

const App = () => {

  const [loaded] = useFonts({
    'Thin': require('./assets/fonts/IBMPlexMono-Thin.ttf'),
    'ThinItalic': require('./assets/fonts/IBMPlexMono-ThinItalic.ttf'),
    'ExtraLight': require('./assets/fonts/IBMPlexMono-ExtraLight.ttf'),
    'ExtraLightItalic': require('./assets/fonts/IBMPlexMono-ExtraLightItalic.ttf'),
    'Light': require('./assets/fonts/IBMPlexMono-Light.ttf'),
    'LightItalic': require('./assets/fonts/IBMPlexMono-LightItalic.ttf'),
    'Regular': require('./assets/fonts/IBMPlexMono-Regular.ttf'),
    'RegularItalic': require('./assets/fonts/IBMPlexMono-Italic.ttf'),
    'Medium': require('./assets/fonts/IBMPlexMono-Medium.ttf'),
    'MediumItalic': require('./assets/fonts/IBMPlexMono-MediumItalic.ttf'),
    'SemiBold': require('./assets/fonts/IBMPlexMono-SemiBold.ttf'),
    'SemiBoldItalic': require('./assets/fonts/IBMPlexMono-SemiBoldItalic.ttf'),
    'Bold': require('./assets/fonts/IBMPlexMono-Bold.ttf'),
    'BoldItalic': require('./assets/fonts/IBMPlexMono-BoldItalic.ttf')
  });

  if (!loaded) {
    return(
      <View style={styles.containerLoader}>
        <ActivityIndicator size='large' colors={colors.light.orange} />
      </View>
    );
  };
 
  return (
    <View style={styles.container}>
      <Header
        headerText='NotePad'
      />
      <AppNavigation />
     </View>
  );
  
};

export default App;