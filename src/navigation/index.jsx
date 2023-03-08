import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";

import TabsNavigator from "./tabs"

const AppNavigation = () => {

    const navigationRef = useNavigationContainerRef();

    const currentScreen = navigationRef.getCurrentRoute()

    return(
        <NavigationContainer ref={navigationRef}>
            <TabsNavigator currentScreen={currentScreen.name}/>
        </NavigationContainer>
    );
};

export default AppNavigation;