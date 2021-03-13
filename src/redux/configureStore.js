import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import counterReducer from './ducks/counter'
import userReducer from './ducks/user'
import { watcherSaga } from './saga/rootSaga'

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
})

// Middleware
const sagaMiddleware = createSagaMiddleware()

// array of Middleware`
const middleware = [sagaMiddleware]

const store = createStore(reducer, {}, applyMiddleware(...middleware))

sagaMiddleware.run(watcherSaga)

export default store
