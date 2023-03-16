import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { useEffect, useState } from "react";

import TabsNavigator from "./tabs"

const AppNavigation = () => {
    
    const navigationRef = useNavigationContainerRef();

    const [currentScreen, setCurrentScreen] = useState();

    useEffect( () => {setCurrentScreen(navigationRef.getCurrentRoute().name)},[])

    return(
        <NavigationContainer
        ref={navigationRef}
        onStateChange={async () => {
            setCurrentScreen(navigationRef.getCurrentRoute().name)
        }}
        >
            <TabsNavigator currentScreen={currentScreen} />
        </NavigationContainer>
    );
};

export default AppNavigation;