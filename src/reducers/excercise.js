import {GET_EXCERCISE} from '../actions/types'
import AsyncStorage  from '@react-native-community/async-storage'
import { storeUserData } from '../storage/storage'

const initalState={
    excercises:null
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
        default:
            return state

        }
}