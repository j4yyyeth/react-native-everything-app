import { React, useState } from "react";
import { Text, SafeAreaView, StyleSheet, Image, Button } from "react-native";
import axios from "axios";

const RandomUsers = () => {
  const [user, setUser] = useState("");
  const fetchRandomUser = async () => {
    try {
      const userData = await axios.get("https://randomuser.me/api/");
      setUser(userData.data.results[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {user && (
        <>
          <Text>
            Name: {user.name.title}. {user.name.first} {user.name.last}
          </Text>
          <Text>Username: {user.login.username}</Text>
          <Text>Email: {user.email}</Text>
          <Text>Gender: {user.gender}</Text>
          <Image
            style={styles.img}
            source={{
              uri: user.picture.large,
            }}
          />
        </>
      )}
      <Button
          onPress={fetchRandomUser}
          title="Random User"
          color="red"
          accessibilityLabel="Get a random user by clikcing button"
        />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  randomUsers: {
    color: "blue",
    fontSize: 25,
  },
  img: {
    height: 150,
    width: 150,
  }
});

export default RandomUsers;
