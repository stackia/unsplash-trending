import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import rootReducer from './reducers/root'
import Layout from './components/Layout'
import PhotoList from './components/PhotoList'
import './index.css'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={PhotoList} />
        <Route path="photos/:page" component={PhotoList} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
