/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import Login from './src/screens/Auth/Login'
import Routes from './src/routes/Routes'

const App = () => {
  return (
    <View style={{backgroundColor: '#040506', flex: 1}}>
      <Routes/>
    </View>
  )
}

export default App