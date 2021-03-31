import { combineReducers } from 'redux'
import todoReducers from '../todo/todoReducer'

const rootReducer = combineReducers({
    todo: todoReducers
})

export default rootReducer