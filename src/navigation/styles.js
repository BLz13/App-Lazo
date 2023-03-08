import { COLOURS } from "../assets/COLOURS"
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    general:{
        headerStyle:{
            backgroundColor:COLOURS.light.grey,
            shadowColor: COLOURS.light.black,
            elevation: 24,
        },
        headerTintColor: COLOURS.light.orange,
        headerTitleStyle:{
            textAlign: "center",
            fontFamily: "MediumItalic",
        }
    },
  
    shopping:{
        headerStyle:{
            backgroundColor:COLOURS.light.yellow,
            shadowColor: COLOURS.light.black,
            elevation: 24,
        },
        headerTintColor: COLOURS.light.black,
        headerTitleStyle:{
            textAlign: "center",
            fontFamily: "MediumItalic",
        }
    },
  
    toDo:{
        headerStyle:{
            backgroundColor:COLOURS.light.grey,
            shadowColor: COLOURS.light.black,
            elevation: 24,
        },
        headerTintColor: COLOURS.light.orange,
        headerTitleStyle:{
            textAlign: "center",
            fontFamily: "MediumItalic",
        }
    }
});