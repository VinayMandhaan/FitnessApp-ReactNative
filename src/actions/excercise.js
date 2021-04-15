import api from '../utils/api'
import { GET_EXCERCISE } from './types'
import AsyncStorage from '@react-native-community/async-storage'
import setAuthToken from '../utils/setAuthToken'
import Toast from 'react-native-simple-toast';
import axios from 'axios';


export const get_excercise = () => async dispatch => {
    try{
        const res = await api.get('/weekexcersizes/me')
        dispatch({
            type:GET_EXCERCISE,
            payload:res.data
        })
        // console.log(res.data,'EXCERCISE')
    }catch(err){
        console.log(err)
    }
}

