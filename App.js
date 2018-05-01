import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import navigation from './src/reducer'

import Navigator, { middleware } from './src/Navigator'

const reducer = combineReducers({ navigation })
const store = createStore(reducer, applyMiddleware(logger, middleware))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
