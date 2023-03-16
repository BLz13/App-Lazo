import { General, Shopping, ToDo } from '../screens/index'
import { useEffect, useState } from 'react';

import { COLOURS } from "../assets/COLOURS";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { styles } from './styles';
import { useColorScheme } from 'react-native';

const BottomTab = createMaterialBottomTabNavigator();

const Tabs = (props) => {

    const { currentScreen } = props;

    const [theme] = useState(useColorScheme() !== "light" ?  "light" : "dark");

    function barStyle(){
        switch (currentScreen) {
          case "general" : return styles(theme).general.tabBar
    
          case "shopping" : return styles(theme).shopping.tabBar
    
          case "toDo" : return styles(theme).toDo.tabBar
    
          default: return styles(theme).general.tabBar
        }
    };

    function colorActive(){
        switch (currentScreen) {
          case "general" : return COLOURS[theme].alt
    
          case "shopping" : return COLOURS[theme].alt
    
          case "toDo" : return COLOURS[theme].alt
    
          default: return COLOURS[theme].theme
        }
    };

    function colorInactive(){
        switch (currentScreen) {
          case "general" : return COLOURS[theme].grey
    
          case "shopping" : return COLOURS[theme].theme
    
          case "toDo" : return COLOURS[theme].grey
    
          default: return COLOURS[theme].grey
        }
    };

    return(
        <BottomTab.Navigator
            initialRouteName="General"
            activeColor={colorActive()}
            inactiveColor={colorInactive()}
            barStyle={barStyle()}
            backBehavior={"none"}
            shifting={true}
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,

            }}
        >
            <BottomTab.Screen
                name="general"
                component={General}
                options={{ 
                    title: "General",
                    tabBarColor: COLOURS[theme].red,
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
                component={Shopping}
                options={{ 
                    title: "Shopping",
                    tabBarColor: COLOURS[theme].yellow,
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
                component={ToDo}
                options={{ 
                    title: "To Do",
                    tabBarColor: COLOURS[theme].violet,
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