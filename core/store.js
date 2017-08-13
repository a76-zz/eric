import { init as websocketInit, emit } from '../actions/websocket'

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './../reducers'
import { Map } from 'immutable'

export function initStore () {
  const middleware = [ thunkMiddleware.withExtraArgument({ emit }) ]
  // use the logger in development mode - this is set in webpack.config.dev.js
  if (__DEV__) {
    middleware.push(createLogger())
  }

  const setup = applyMiddleware(...middleware)(createStore)

  const store = setup(rootReducer, new Map())
  websocketInit(store) // setup websocket listeners etc

  return store
}
