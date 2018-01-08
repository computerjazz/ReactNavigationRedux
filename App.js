import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import navigation from './src/reducer'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native

import Navigator from './src/Navigator'

const config = {
  key: 'primary',
  storage
 }

const reducer = persistCombineReducers(config, { navigation })
const store = createStore(reducer, applyMiddleware(logger))
persistStore(
  store,
  null,
  () => {
    store.getState() // if you want to get restoredState
  }
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
