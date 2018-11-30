import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { GameReducer } from './GameReducer'

const reducers = combineReducers({
  game: GameReducer,
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store
