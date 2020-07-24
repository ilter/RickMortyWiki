/* eslint-disable react-native/no-inline-styles */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  View,
  FlatList,
  Dimensions
} from 'react-native';


const DetailPage = ({route}) => {
  const {images} = route.params;
  const {characters} = route.params;
  const {width, height} = Dimensions.get('window');

  for (let i = 0; i < images.length; i += 1) {
    console.log(images[i]);
  }

  return (
    <SafeAreaView style={styles.names}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'left'}
        snapToInterval={width}
        contentContainerStyle={{justifyContent: 'center'}}
        horizontal={true}
        data={images}
        renderItem={() => {
          return (
            <SafeAreaView>
              <Image
                source={{
                  uri: images,
                }}
                style={{
                  width: width,
                  height: height * 0.4,
                  resizeMode: 'contain',
                }}
              />
            </SafeAreaView>
          );
        }}
        keyExtractor={(item) => Object.keys(item)}
      />
      <Text style={styles.items_name}> {characters}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  names: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    marginBottom: 150,
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

export default DetailPage;
