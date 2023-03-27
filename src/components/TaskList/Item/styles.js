import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

  listItemContainer:{
    width: "100%",
  },
  listItem:{
    textAlign: "justify",
    borderStyle: "solid",
    borderBottomWidth: 0.8,
    fontFamily: "Italic",
    paddingVertical: 5,
    lineHeight: 25
  },
  listImageItem:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    textAlign: "justify",
    borderStyle: "solid",
    fontFamily: "Italic",
    gap: 20,
    paddingVertical: 5,
    borderBottomWidth: 0.8
  },
  imageText:{
    textAlign: "justify",
    fontFamily: "Italic"
  }
});