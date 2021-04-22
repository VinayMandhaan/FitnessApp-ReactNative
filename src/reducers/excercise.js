import {COMPLETE_EXERCISE, GET_EXCERCISE, GET_LEFTOVER_EXCERCISE, GET_REPORT, SESSION_COMPLETED} from '../actions/types'
import AsyncStorage  from '@react-native-community/async-storage'
import { storeUserData } from '../storage/storage'

const initalState={
    loading:true,
    excercises:null,
    leftover:null,
    reports:null
}

export default function(state = initalState, action){
    const {type, payload} = action
    switch(type){
        case GET_EXCERCISE:
        console.log(payload,'Exerci')    
        return {
                ...state,
                loading: false,
                excercises:payload
            }
        case SESSION_COMPLETED:
            console.log('FIRST')
            return {
                ...state,
                loading:false,
                // excercises:payload
           }
        case GET_LEFTOVER_EXCERCISE:
            return {
                ...state,
                loading:false,
                leftover:payload
            }
        case COMPLETE_EXERCISE:
            console.log('SECOND')
            return {
                ...state,
                loading:false,
            }
        case GET_REPORT:
            return {
                ...state,
                loading:false,
                reports:payload
            }
        default:
            return state

        }
}