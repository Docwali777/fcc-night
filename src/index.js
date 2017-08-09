import React, { Component } from 'react'
import { render } from 'react-dom'

import App from './App'

import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './redux_reducers/index'

const store = createStore(reducers, applyMiddleware(thunk, logger))



render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('wali'))
