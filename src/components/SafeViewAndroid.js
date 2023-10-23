import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "#FF573300",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
});