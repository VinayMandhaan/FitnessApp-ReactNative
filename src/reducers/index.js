import {combineReducers} from 'redux'
import auth from './auth'
import excercise from './excercise'

export default combineReducers({
   auth,
   excercise
})