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
import {Provider} from 'react-redux'
import store from './src/store'

const App = () => {
  return (
    <View style={{backgroundColor: '#040506', flex: 1}}>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </View>
  )
}

export default App