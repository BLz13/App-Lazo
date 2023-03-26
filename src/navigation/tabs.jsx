import { COLOURS } from "../assets/COLOURS";
import { Header } from '../components/index';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NotesPage } from '../screens/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from './styles';
import { useColorScheme } from "react-native";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {

    const theme = ( useColorScheme() === "light" ? "light" : "dark" );

    function tabActiveColors(screen){
        switch (screen) {
            case "general" : return (
                (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].cream
            )
            case "shopping" : return (
                (theme === "light") ? COLOURS[theme].darkGrey : COLOURS[theme].cream
            )

            case "toDo" : return (
                (theme === "light") ? COLOURS[theme].grey : COLOURS[theme].cream
            )

            default: return (
                (theme === "light") ? COLOURS[theme].alt : COLOURS[theme].cream
            )
        };
    };

    function tabInactiveColors(screen){
        switch (screen) {
            case "general" : return (
                (theme === "light") ? COLOURS[theme].lightGrey : COLOURS[theme].lightGrey
            )
            case "shopping" : return (
                (theme === "light") ? COLOURS[theme].lightGrey : COLOURS[theme].lightGrey
            )

            case "toDo" : return (
                (theme === "light") ? COLOURS[theme].lightGrey : COLOURS[theme].darkGrey
            )

            default: return (
                (theme === "light") ? COLOURS[theme].lightGrey : COLOURS[theme].lightGrey
            )
        };
    };

    function tabBackColors(screen){
        switch (screen) {
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

    return(
        <BottomTab.Navigator
            initialRouteName="General"
            backBehavior={"none"}
            screenOptions={{
                indicatorStyle: {
                    width: 0, height: 0, elevation: 0,      
                },
                header: ({ route }) => {
                    return <Header currentScreen={route.name} theme={theme} />
                }
            }}
        >
            <BottomTab.Screen
                name="general"
                component={NotesPage}
                options={({ route }) => ({
                    title: "General",
                    tabBarStyle: [styles.tabBar, tabBackColors(route.name)],
                    tabBarItemStyle: styles.tabBarItem,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarActiveTintColor: tabActiveColors(route.name),
                    tabBarInactiveTintColor: tabInactiveColors(route.name),
                    tabBarIcon: ( {focused, color} ) => (
                        <MaterialCommunityIcons
                            name={ focused ? "notebook" : "notebook-outline" }
                            size={22}
                            color={color}
                        />
                    )
                })}
            />
            <BottomTab.Screen
                name="shopping"
                component={NotesPage}
                options={({ route }) => ({
                    title: "Shopping",
                    tabBarStyle: [styles.tabBar, tabBackColors(route.name)],
                    tabBarItemStyle: styles.tabBarItem,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarActiveTintColor: tabActiveColors(route.name),
                    tabBarInactiveTintColor: tabInactiveColors(route.name),
                    tabBarIcon: ( {focused, color} ) => (
                        <MaterialCommunityIcons
                            name={ focused ? "note-text" : "note-text-outline" }
                            size={22}
                            color={color}
                        />
                    )
                })}
            />
            <BottomTab.Screen
                name="toDo"
                component={NotesPage}
                options={({ route }) => ({
                    title: "To Do",
                    tabBarStyle: [styles.tabBar, tabBackColors(route.name)],
                    tabBarItemStyle: styles.tabBarItem,
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarActiveTintColor: tabActiveColors(route.name),
                    tabBarInactiveTintColor: tabInactiveColors(route.name),
                    tabBarIcon: ( {focused, color} ) => (
                        <MaterialCommunityIcons
                            name={ focused ? "notebook-check" : "notebook-check-outline" }
                            size={22}
                            color={color}
                        />
                    )
                })}
            />
        </BottomTab.Navigator>
    )
};

export default Tabs;