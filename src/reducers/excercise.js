import {COMPLETE_EXERCISE, GET_EXCERCISE, GET_LEFTOVER_EXCERCISE, SESSION_COMPLETED} from '../actions/types'
import AsyncStorage  from '@react-native-community/async-storage'
import { storeUserData } from '../storage/storage'

const initalState={
    excercises:null,
    leftover:null,
    loading:true
}

export default function(state = initalState, action){
    const {type, payload} = action
    switch(type){
        case GET_EXCERCISE:
            return {
                ...state,
                loading: false,
                excercises:payload
            }
        case SESSION_COMPLETED:
            return {
                ...state,
                loading:false,
                excercises:payload
           }
        case GET_LEFTOVER_EXCERCISE:
            return {
                ...state,
                loading:false,
                leftover:payload
            }
        case COMPLETE_EXERCISE:
            return {
                ...state,
                loading:false,
            }
        default:
            return state

        }
}