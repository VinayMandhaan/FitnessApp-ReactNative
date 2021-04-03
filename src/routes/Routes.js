
import React, {useEffect,useState} from 'react';
import { View, Text, Image, Button, ImageBackground, TouchableOpacity, ScrollView, Alert, BackHandler } from 'react-native';

import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


//Screens
import Login from '../screens/Auth/Login'
import Register from '../screens/Auth/Register'
import Home from '../screens/Home/Home'
import Report from '../screens/Home/Report'
import Profile from '../screens/Home/Profile'
import Workout from '../screens/Home/Workout'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
      primary: 'red',
    },
};



function handleBackButtonClick() {
  Alert.alert(
    stringLang.en.exitAppTitle,
    stringLang.en.exitAppTitle,
    [
      {
        text: stringLang.en.no,
        onPress: () => console.log("Cancel Pressed"),
       
      },
      { text: stringLang.en.yes, onPress: () => BackHandler.exitApp() }
    ],
    { cancelable: false },

  
  )
  return true;
}



function tabNavigation(){
  return(
      <Tab.Navigator initialRouteName="Home"  tabBarOptions={{style:{backgroundColor:'#303030',  height:70}}}>
        <Tab.Screen name="Report" component={Report} options={{tabBarLabel: '',
        tabBarIcon: ({focused}) => (
            <Icon name="my-library-books" color={focused ? "white" : "white"} size={focused ? 35 : 32} style={{marginTop:5, borderRadius:60/2, backgroundColor:focused ?  '#B02E14' : '#040506', padding:8}}/>
        )}}/>
        <Tab.Screen name="Home" component={Home} options={{tabBarLabel: '',
        tabBarIcon: ({focused}) => (
            <Icon name="home" color={focused ? "white" : "white"} size={focused ? 50 : 45} style={{marginTop:-60, borderRadius:60/2, backgroundColor:focused ?  '#B02E14' : '#040506' , padding:5}}/>
        )}}
        listeners={{
          focus: async()=>{
              BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
          },
          blur: async()=>{
              BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
          },
        }}
        />
        <Tab.Screen name="Profile" component={Profile} options={{tabBarLabel: '',
        tabBarIcon: ({focused}) => (
          <EvilIcons name="user" color={focused ? "white" : "white"} size={focused ? 40 : 35} style={{marginTop:5, borderRadius:60/2, backgroundColor:focused ?  '#B02E14' : '#040506', padding:8}}/>
        )}}/>
      </Tab.Navigator>
  )
}


function Routes(props) {
//   let isAuthenticated=useSelector(state=>state.auth.user);

  return (
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
          {/* {
            isAuthenticated ? 
            (
              <>
              <Stack.Screen name="Main" component={tabNavigation}/>
              </>
            ):
            (
              <>

              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={Register}/>
              </>
            )
          } */}
          <Stack.Screen name="Main" component={Workout}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

  export default Routes