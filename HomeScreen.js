import React from "react";
import {StyleSheet, View, Text} from "react-native";

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <Text>Home screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    }
});