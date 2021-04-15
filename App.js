/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  Text,
  View,
} from 'react-native';

import Login from './src/screens/Auth/Login'
import Routes from './src/routes/Routes'
import {Provider} from 'react-redux'
import AsyncStorage  from '@react-native-community/async-storage'
import store from './src/store'
import setAuthToken from './src/utils/setAuthToken'
import {loadUser} from './src/actions/auth'

const App = () => {

  
  const getAsycToken = async() => {
    var token = await AsyncStorage.getItem('token')
    if(token){
      setAuthToken(token)
    }
  }

  useEffect(()=>{
    getAsycToken()
    store.dispatch(loadUser())
  },[])

  return (
    <View style={{backgroundColor: '#040506', flex: 1}}>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </View>
  )
}

export default App