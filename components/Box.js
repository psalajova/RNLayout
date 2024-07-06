import { View, Text, StyleSheet } from "react-native";

export default function Box({ boxText, style }) {
    return <View style={[styles.box, style]}>
        <Text style={styles.text}>
            {boxText}
        </Text>
    </View>
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#fff",
        padding: 20,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        color: "white",
    },
})