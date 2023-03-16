import { COLOURS } from "../assets/COLOURS"
import { StyleSheet } from "react-native";

export const styles = (theme) => StyleSheet.create({

    general:{
        tabBar:{
            height: "10%",
            width: "95%",
            position: "absolute",
            left: "2.5%",
            marginBottom: "2%",
            borderRadius: 50,
            overflow: "hidden",
            backfaceVisibility: "hidden",
            backgroundColor:COLOURS[theme].yellow,
            elevation: 24,
        }
    },
  
    shopping:{
        tabBar:{
            height: "10%",
            width: "95%",
            position: "absolute",
            left: "2.5%",
            marginBottom: "2%",
            borderRadius: 50,
            overflow: "hidden",
            backfaceVisibility: "hidden",
            backgroundColor:COLOURS[theme].grey,
            elevation: 24,
        }
    },
  
    toDo:{
        tabBar:{
            height: "10%",
            width: "95%",
            position: "absolute",
            left: "2.5%",
            marginBottom: "2%",
            borderRadius: 50,
            overflow: "hidden",
            backfaceVisibility: "hidden",
            backgroundColor:COLOURS[theme].theme,
            elevation: 24,
        }
    }
});