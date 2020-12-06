/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';

import {Router, Scene} from 'react-native-router-flux';

import HomePage from './src/pages/HomePage';
import DetailPage from './src/pages/DetailPage';
import CustomTab from './src/Components/CustomTab';
import InfoPage from './src/pages/InfoPage';

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="tab" tabs hideNavBar tabBarComponent={CustomTab}>
          <Scene key="home" component={HomePage} title="Rick and Morty Wiki" />
          <Scene key="detail" component={DetailPage} title="Character Detail" />
          <Scene key="info" component={InfoPage} title="Info" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default App;
