import { React, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Button,
  Alert,
} from "react-native";
// import { MaterialIcons } from '@expo/vector-icons';

const CurrentWeather = () => {
  const [count, setCount] = useState(0);
  const updatePos = () => {
    setCount(count + 1);
    Alert.alert("Increased Count by 1");
  };
  const updateNeg = () => {
    setCount(count - 1);
    Alert.alert("Decreased Count by 1");
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Button
          onPress={updatePos}
          title="Increase Count"
          color="limegreen"
          accessibilityLabel="Increase Count by clikcing button"
        />
        <Button
          onPress={updateNeg}
          title="Decrease Count"
          color="red"
          accessibilityLabel="Increase Count by clikcing button"
        />
        <Text style={styles.text}>{count}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "black",
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 50,
  },
});

export default CurrentWeather;