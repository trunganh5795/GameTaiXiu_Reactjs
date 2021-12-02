import { createStore, combineReducers } from 'redux'
import { diceReducer } from './diceReducer/diceReducer'
import { playerReducer } from './playerReducer/playerReducer'
let rootReducer = combineReducers({
    diceReducer,playerReducer
})
export const store = createStore(rootReducer)