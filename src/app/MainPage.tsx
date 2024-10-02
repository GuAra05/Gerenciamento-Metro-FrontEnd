import { Link } from "expo-router";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function MainPage() {
    return (
        <View>
            <Link href="/ExtinguisherPage">
                <Text style={styles.text}>Extinguisher</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 20
    }
});
