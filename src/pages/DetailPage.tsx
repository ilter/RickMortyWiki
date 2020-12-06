import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const DetailPage = () => {
  return (
    <SafeAreaView style={styles.names}>
      <Text> Character Detail Page </Text>
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
});

export default DetailPage;
