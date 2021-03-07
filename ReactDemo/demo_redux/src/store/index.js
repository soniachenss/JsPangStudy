import { createStore,applyMiddleware, compose } from 'redux';
import reducer from './reducer'
// import thunk from 'redux-thunk'
// const composeEnhaners = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// const enHancer = composeEnhaners(applyMiddleware(thunk))

import createSagaMiddleWare from 'redux-saga'
import mySagas from './sagas'

const SagaMiddleWare = createSagaMiddleWare()
const composeEnhaners = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enHancer = composeEnhaners(applyMiddleware(SagaMiddleWare))

const store = createStore(
    reducer,
    enHancer
)
SagaMiddleWare.run(mySagas)

export default store;