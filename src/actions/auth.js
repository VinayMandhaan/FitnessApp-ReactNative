
import api from '../utils/api'
import {REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE, INFO_UPDATED, INFO_ERROR} from './types'
import AsyncStorage from '@react-native-community/async-storage'
import setAuthToken from '../utils/setAuthToken'
import Toast from 'react-native-simple-toast';
import axios from 'axios';



//LOAD USER

export const loadUser = () => async dispatch => {
    // try{
    //     const res = await api.get('/auth')
    //     // console.warn('USER LOADEDDDD', res.data)
    //     Toast.show("User Loaded", Toast.SHORT)
    //     dispatch({
    //         type: USER_LOADED,
    //         payload: res.data
    //     })
    // }catch(err){
    //     console.log("called")
    //     // console.warn(err.message)
    //     dispatch({
    //         type: AUTH_ERROR
    //     })
    // }
    try{
        var userData =  await AsyncStorage.getItem('@userData')
        var jsonData = JSON.parse(userData)
        dispatch({
            type:USER_LOADED,
            payload:jsonData
        })
        
    }catch(err){
        console.log(err)
    }
}


//REGISTER USER
export const register = (formData) => async dispatch => {
    
    try{
        const res = await api.post('/users/signup',formData)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        // dispatch(loadUser())
        Toast.show("Registered Successfully", Toast.SHORT)
    }catch(err){
        console.log( err.response.data)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => Toast.show(JSON.stringify(error.msg), Toast.SHORT))
        } 
        dispatch({
            type: REGISTER_FAIL
        })
    }
}


//LOGIN USER
export const login = (formData,navigation) => async dispatch => {
 

    // const body = JSON.stringify({email,password})
    console.log(formData)
    try{
        const res = await api.post('/auth/login',formData)
        // console.warn('Login Success', res.data.token)
        // AsyncStorage.setItem('token',JSON.stringify(res.data.token))
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        Toast.show(res.data.msg, Toast.SHORT)
        // dispatch(loadUser())
        // navigation.navigate('Main')

    }catch(err){
        Toast.show('Invalid ID or Password', Toast.SHORT)
        const errors = err.response.data.errors
        if(errors){
            errors.forEach(error => dispatch(error.msg,'danger'))
        } 
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const logout = () => dispatch => {

    // console.warn("LOGGING OUT")
    Toast.show("Logged Out Successfully", Toast.SHORT)
    dispatch({
        type : LOGOUT
    })
}

export const getUpdatedUserInfo = () => async dispatch => {
     try{
        const res = await api.get('/auth')
        // console.warn('USER LOADEDDDD', res.data)
        Toast.show("Status Updated", Toast.SHORT)
        dispatch({
            type: INFO_UPDATED,
            payload: res.data
        })
    }catch(err){
        // console.warn(err.message)
        dispatch({
            type: INFO_ERROR
        })
    }
}
