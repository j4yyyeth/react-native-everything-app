import React from "react";
import { View, StyleSheet } from "react-native";
// import CurrentWeather from "./src/components/CurrentWeather";
// import UpcomingWeather from "./src/components/UpcomingWeather";
// import FlatList from "./src/components/FlatListBasics";
import RandomUsers from "./src/components/RandomUsers";

const App = () => {
  return (
    <View style={styles.container}>
      <RandomUsers />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App;
