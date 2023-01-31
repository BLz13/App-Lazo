import { ActivityIndicator, View } from 'react-native';
import React, { useState } from 'react';

import { General } from './screens/index'
import { Header } from './components/index'
import { styles } from './styles';

// import { useFonts } from "expo-font"

const App = () => {

  let screen = 0;

  let content;

  // const [loaded] = useFonts({
  //   "name": required(../../assets)
  // });

  // if (!loaded) {
  //   return(
  //     <View style={styles.containerLoader}>
  //       <ActivityIndicator size='large' colors={orange} />
  //     </View>
  //   )
  // }

  // const [screen, setScreen] = useState();

  switch (screen) {
    case 0:
      content = <General />;
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
      />
      {content}
    </View>
  );
};

export default App;