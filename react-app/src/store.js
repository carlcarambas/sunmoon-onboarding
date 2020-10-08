import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers/rootReducer'
import timerReducer from './reducers/timerReducer'
import thunk from 'redux-thunk'

const store = createStore(timerReducer, applyMiddleware(thunk))

export default store