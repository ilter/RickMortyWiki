import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import axios from 'axios';

const API = 'https://rickandmortyapi.com/api/character';

const HomePage = ({navigation}) => {
  const [characters, setCharacters] = useState({});
  const [characterNames, setCharacterNames] = useState({});
  const [images, setImages] = useState([]);

  

  const fetchData = async () => {
    axios.get(API).then(({data}) => {
      const charactersObject = data.results;
      const characterKeys = Object.keys(charactersObject);
      //console.log(charactersObject[0].name);
      const mergedCharacterObject = {};
      const characterNamesObject = {};
      const characterImageObject = {};

      characterKeys.map((key) => {
        const characterInfo =
          charactersObject[key].name +
          '\n' +
          ' Location:' +
          charactersObject[key].location.name +
          '\n' +
          ' Species: ' +
          charactersObject[key].species +
          '\n' +
          ' Gender: ' +
          charactersObject[key].gender +
          '\n' +
          ' Status: ' +
          charactersObject[key].status;
        const characterNamesInfo = charactersObject[key].name;
        const characterImageURL = charactersObject[key].image;
        characterImageObject[key] = characterImageURL;
        characterNamesObject[key] = characterNamesInfo;
        mergedCharacterObject[key] = characterInfo;
      });
      setCharacterNames(characterNamesObject);
      setCharacters(mergedCharacterObject);
      setImages(characterImageObject);
    });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    });
  }, []);

  return (
    <SafeAreaView style={styles.names}>
      <FlatList
        data={Object.keys(characters)}
        keyExtractor={(item) => item}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('DetailPage', {
                  characters: characters[item],
                  images: images[item],
                })
              }>
              <Text style={styles.items_name}>{characterNames[item]}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  names: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  items_container: {
    fontSize: 30,
    fontWeight: '200',
  },
  items_name: {
    fontSize: 30,
    fontWeight: '200',
  },
  items_status: {
    fontSize: 22,
    fontWeight: '200',
  },
  items_location: {
    fontSize: 22,
    fontWeight: '200',
  },
});

export default HomePage;
