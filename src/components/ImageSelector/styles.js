import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalBack:{
      alignSelf:'center',
      flex: 1,
      alignItems: "center",
      width: '100%',
      backgroundColor: '#0002'
    },
    modalContainer:{
      top: Dimensions.get('window').height - 450,
      borderRadius: 30,
      paddingVertical: 40,
      paddingHorizontal: 20,
      aspectRatio: 1,
      width: "90%",
      display: "flex",
      backgroundColor: "white",
      flexDirection: "column",
      flexWrap: "nowrap",
      alignItems: "center",
      justifyContent: "space-between"
    },
    previewBox: {
        flex: 3,
        aspectRatio: 1.5,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
    },
    noImage:{
        flex: 3,
        aspectRatio: 1.5,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    previewText:{
        fontFamily: 'Regular'
    },
    previewImage:{
        width: '100%',
        height: '100%'
    },
    buttonsContainer:{
        flex: 1,
        width: "100%",
        display:"flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cancelIcon:{
        position:"absolute",
        top: 10,
        right: 10
    }
})