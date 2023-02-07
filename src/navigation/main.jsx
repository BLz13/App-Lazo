import { General, Menu } from '../screens/index'

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return(
        <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen name="Menu" component={Menu} />
            <Stack.Screen name="General" component={General} />
        </Stack.Navigator>
    )
};

export default MainNavigation;