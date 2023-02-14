import { General, Menu, Shopping, ToDo } from '../screens/index'

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { styles } from './styles';

const Stack = createNativeStackNavigator();

const NotesNavigation = () => {
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
            <Stack.Screen
                name="general"
                component={General}
                options={ ( { route } ) => ({ 
                    title: route.params.categoryName,
                })}
            />
            <Stack.Screen
                name="shopping"
                component={Shopping}
                options={ ( { route } ) => ({ 
                    title: route.params.categoryName,
                })}
            />
            <Stack.Screen
                name="toDo"
                component={ToDo}
                options={ ( { route } ) => ({ 
                    title: route.params.categoryName,
                })}
            />
        </Stack.Navigator>
    )
};

export default NotesNavigation;