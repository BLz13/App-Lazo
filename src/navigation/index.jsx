import MainNavigation from "./main";
import { NavigationContainer } from "@react-navigation/native";

const AppNavigation = () => {
    return(
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    );
};

export default AppNavigation;