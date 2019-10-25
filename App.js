/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,

  StatusBar,
} from 'react-native';

import TechList from './src/components/TechList';


const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <TechList />
    </SafeAreaView>
  </>
);

export default App;
