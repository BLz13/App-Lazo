import { General, NotesPage, Shopping, ToDo } from '../screens/index'

import { COLOURS } from "../assets/COLOURS";
import { Header } from '../components/index';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './styles';
import { useSelector } from 'react-redux';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {

    const theme = useSelector( (state) => state.appSettings.appTheme);

    return(
        <BottomTab.Navigator
            initialRouteName="General"
            backBehavior={"none"}
            screenOptions={{
                tabBarHideOnKeyboard: true,
                header: ({ route }) => {
                    return <Header currentScreen={route.name} />
                }
            }}
        >
            <BottomTab.Screen
                name="general"
                component={NotesPage}
                options={{
                    title: "General",
                    tabBarStyle: [styles.tabBar, {backgroundColor: COLOURS[theme].alt}],
                    tabBarActiveTintColor: COLOURS[theme].theme,
                    tabBarInactiveTintColor: COLOURS[theme].grey,
                    tabBarIcon: ( {focused, color} ) => (
                        <MaterialCommunityIcons
                            name={ focused ? "notebook" : "notebook-outline" }
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="shopping"
                component={NotesPage}
                options={{
                    title: "Shopping",
                    tabBarStyle: [styles.tabBar, {backgroundColor: COLOURS[theme].alt}],
                    tabBarActiveTintColor: COLOURS[theme].theme,
                    tabBarInactiveTintColor: COLOURS[theme].grey,
                    tabBarIcon: ( {focused, color} ) => (
                        <MaterialCommunityIcons
                            name={ focused ? "note-text" : "note-text-outline" }
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="toDo"
                component={NotesPage}
                options={{
                    title: "To Do",
                    tabBarStyle: [styles.tabBar, {backgroundColor: COLOURS[theme].alt}],
                    tabBarActiveTintColor: COLOURS[theme].theme,
                    tabBarInactiveTintColor: COLOURS[theme].grey,
                    tabBarIcon: ( {focused, color} ) => (
                        <MaterialCommunityIcons
                            name={ focused ? "notebook-check" : "notebook-check-outline" }
                            size={22}
                            color={color}
                        />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
};

export default Tabs;