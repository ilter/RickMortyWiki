/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomePage from './src/pages/HomePage';
import DetailPage from './src/pages/DetailPage';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTintColor: 'black',
          }}>
          <Stack.Screen
            style={styles.bcgrnd}
            name="HomePage"
            component={HomePage}
            options={{title: 'Rick and Morty Wiki'}}
          />
          <Stack.Screen
            name="DetailPage"
            options={{title: 'Character Details'}}
            component={DetailPage}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  bcgrnd: {
    backgroundColor: 'white',
  },
});

export default App;
