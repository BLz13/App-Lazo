import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalBack:{
    alignSelf:'center',
    alignItems: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#0002'
  },
  modalContainer:{
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: 0,
    aspectRatio: 4,
    elevation: 24,
    width: "95%",
    display: "flex",
    backgroundColor: "white",
    flexDirection: "column",
    flexWrap: "nowrap",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: (Dimensions.get('window').height * 0.01)
  },
  text: {
    fontFamily: "MediumItalic"
  },
  cancelIcon:{
      position:"absolute",
      top: 2,
      right: 2,
  }
});