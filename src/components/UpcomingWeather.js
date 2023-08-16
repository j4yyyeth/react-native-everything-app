import React from "react";
import { Text, SafeAreaView, StyleSheet } from "react-native";

const UpcomingWeather = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Upcoming Weather</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default UpcomingWeather;
