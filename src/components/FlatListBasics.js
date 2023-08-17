import { React } from "react";
import { FlatList, View, Text, SafeAreaView, StyleSheet } from "react-native";

const FlatListBasics = () => {
  const nameData = [
    "Devin",
    "Dan",
    "Dominic",
    "Jackson",
    "James",
    "Joel",
    "John",
    "Jillian",
    "Jimmy",
    "Julie",
  ];

  return (
    <SafeAreaView>
      <Text>My Flat List</Text>
      <FlatList 
        data={nameData}
        renderItem={({item}) => <Text style={styles.text}>{item}</Text>}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    color: 'red',
  }
});

export default FlatListBasics;
