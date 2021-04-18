import {REGISTER_SUCCESS,REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, DELETE_ACCOUNT, INFO_UPDATED} from '../actions/types'
import AsyncStorage  from '@react-native-community/async-storage'
import { storeUserData } from '../storage/storage'
import setAuthToken from '../utils/setAuthToken'



const initalState={
    token:AsyncStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    isReg : false
}

export default function(state = initalState, action){
    const {type, payload} = action
    switch(type){
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...payload,
                loading:false,
                isReg:true
            }
        case LOGIN_SUCCESS:
            console.log(payload)
            storeUserData('@userData',payload.user)
            setAuthToken(payload.token)
            AsyncStorage.setItem('token',payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated:true,
                loading:false,
            }
        case INFO_UPDATED:
            storeUserData('@userData',payload)
            return {
                ...state,
                loading:false,
                user: payload
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
        // case DELETE_ACCOUNT:
        AsyncStorage.removeItem('token')
        AsyncStorage.removeItem('@userData')
            return {
                ...state,
                token:null,
                user : null,
                isAuthenticated:false,
                loading:false
            }
        default:
            return state

        }
        


}