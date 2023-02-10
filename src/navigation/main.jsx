import { General, Menu } from '../screens/index'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from './styles';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return(
        <Stack.Navigator
            initialRouteName="Menu"
            screenOptions={{
                headerStyle:styles.headerStyle,
                headerTintColor:styles.headerTintColor,
                headerTitleStyle:styles.headerTitleStyle
            }}
        >
            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ 
                    title: 'NotePad',
                }}
            />
            <Stack.Screen name="General" component={General} />
        </Stack.Navigator>
    )
};

export default MainNavigation;