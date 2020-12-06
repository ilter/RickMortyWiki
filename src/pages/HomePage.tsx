import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import getCharacters from '../requests/index';

const HomePage = () => {
  const [characterArray, setCharArray] = useState([]);

  const fetchData = async () => {
    const response = await getCharacters();
    setCharArray(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = (item: any) => {
    return (
      <TouchableOpacity onPress={() => Actions.detail()}>
        <Text style={styles.items_name}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.names}>
      <FlatList
        data={characterArray}
        keyExtractor={(item, index) => 'Characters-' + index}
        renderItem={({item}) => renderContent(item)}
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
