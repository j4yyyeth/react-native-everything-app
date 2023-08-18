import { React } from "react";
import { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, Linking, FlatList } from "react-native";
import axios from "axios";

const BookSearch = () => {
  const [books, setBooks] = useState([]);

  const key = "AIzaSyDb2EU869DY38CKAjTXpQ0cJk6925YohbI";

  const handleBooks = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=search-terms&key=${key}`
      );
      setBooks(response.data.items);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleBooks();
  }, []);

  return (
    <SafeAreaView style={styles.view}>
      <Text>Book Search</Text>
      <FlatList 
        data={books}
        renderItem={({item}) => 
            <>
                <Text>Title: {item.volumeInfo.title}</Text> 
                <Text>Author(s): {item.volumeInfo.authors?.join(', ')}</Text> 
                <Text>Date Published: {item.volumeInfo.publishedDate}</Text>
                <Text>Average Rating: {item.volumeInfo.averageRating ? item.volumeInfo.averageRating : 'None'} / 5</Text>
                <Text style={styles.link} onPress={() => Linking.openURL(`${item.volumeInfo.infoLink}`)}>Link</Text>
            </>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  link: {
    color: 'purple',
  }
});

export default BookSearch;
