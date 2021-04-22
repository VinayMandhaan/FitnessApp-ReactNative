import api from '../utils/api'
import { COMPLETE_EXERCISE, GET_EXCERCISE, GET_LEFTOVER_EXCERCISE, GET_REPORT, SESSION_COMPLETED } from './types'
import AsyncStorage from '@react-native-community/async-storage'
import setAuthToken from '../utils/setAuthToken'
import Toast from 'react-native-simple-toast';
import axios from 'axios';


export const get_excercise = () => async dispatch => {
    // console.log('Action Called')
    console.log('FIRST ACTION')
    try{
        // console.log('Before API')
        const res = await api.get('/weekexcersizes/me')
        // console.log('API Called')
        dispatch({
            type:GET_EXCERCISE,
            payload:res.data
        })
        // console.log(res.data,'EX')
        // console.log(res.data,'EXCERCISE')
    }catch(err){
        console.log(err)
    }
}


export const complete_session = (data) => async dispatch => {
    try{
        console.log('FIRST SESSION')
        const res = await api.post('/weekexcersizes/status', data)
        dispatch({
            type:SESSION_COMPLETED,
            payload:res.data
        })
    }catch(err){
        console.log(err)
    }
}


export const leftover_excercise = () => async dispatch => {
    try{
        const res = await api.get('/weekexcersizes/leftover/me')
        dispatch({
            type:GET_LEFTOVER_EXCERCISE,
            payload:res.data
        })
    }catch(err){
        console.log(err)
    }
}


export const complete_excercise = (data) => async dispatch => {
    try{
        const res = await api.post('/weekexcersizes/complete', data)
        dispatch({
            type:COMPLETE_EXERCISE,
            payload:res.data
        })
        dispatch(get_excercise())

    }catch(err){
        dispatch(get_excercise())
        console.log(err)
    }
}

export const excercise_reports = () => async dispatch => {
    try{
        const res = await api.get('/weekexcersizes/all/me')
        dispatch({
            type:GET_REPORT,
            payload:res.data
        })
    }catch(err){
        console.log(err)
    }
}

