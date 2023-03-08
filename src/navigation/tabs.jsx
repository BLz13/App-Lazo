import { General, Shopping, ToDo } from '../screens/index'

import { COLOURS } from "../assets/COLOURS";
import MaterialCommunityIcons   from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from './styles';

const BottomTab = createBottomTabNavigator();

const Tabs = (props) => {

    const { currentScreen } = props;

    console.log(currentScreen);

    function styleName(){
        switch (currentScreen) {
          case "general" : return "general"
    
          case "shopping" : return "shopping" 
    
          case "toDo" : return "toDo" 
    
          default:
            break;
        }
    };

    return(
        <BottomTab.Navigator
            initialRouteName="General"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle:styles.shopping.tabBarLabelStyle,
                tabBarActiveTintColor: COLOURS.light.orange,
                tabBarInactiveTintColor: COLOURS.light.grey,
                tabBarHideOnKeyboard: true,
            }}
        >
            <BottomTab.Screen
                name="general"
                component={General}
                options={{ 
                    title: "General",
                    tabBarIcon: ( {focused} ) => (
                        <MaterialCommunityIcons
                            name={ focused ? "notebook" : "notebook-outline" }
                            size={ focused ? 22 : 18 }
                            color={ focused ? COLOURS.light.orange : COLOURS.light.grey }
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="shopping"
                component={Shopping}
                options={{ 
                    title: "Shopping",
                    tabBarIcon: ( {focused} ) => (
                        <MaterialCommunityIcons
                            name={ focused ? "note-text" : "note-text-outline" }
                            size={ focused ? 22 : 18 }
                            color={ focused ? COLOURS.light.orange : COLOURS.light.grey }
                        />
                    )
                }}
            />
            <BottomTab.Screen
                name="toDo"
                component={ToDo}
                options={{ 
                    title: "To Do",
                    tabBarIcon: ( { focused } ) => (
                        <MaterialCommunityIcons
                            name={ focused ? "notebook-check" : "notebook-check-outline" }
                            size={ focused ? 22 : 18 }
                            color={ focused ? COLOURS.light.orange : COLOURS.light.grey }
                        />
                    )
                }}
            />
        </BottomTab.Navigator>
    )
};

export default Tabs;