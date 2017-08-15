import 'babel-polyfill'
import 'whatwg-fetch'

import React from 'react'
import ReactDOM from 'react-dom'
import FastClick from 'fastclick'
import { Provider } from 'react-redux'

import initStore from './core/store'
import router from './core/router'
import history from './core/history'
import App from './components/Core/App'

import s from './main.css'
let routes = require('./routes.json') // Loaded with utils/routes-loader.js

function renderComponent(component) {
  const container = document.getElementById('container')
  ReactDOM.render(
    <Provider store={initStore()}>
      <App>
         {component}
      </App>
    </Provider>,
    container
  )
}

function render(location) {
  return router.render(routes, location, renderComponent)
}

// Handle client-side navigation by using HTML5 History API
// For more information visit https://github.com/ReactJSTraining/history/tree/master/docs#readme
history.listen(render)
render(history.getCurrentLocation())

// Eliminates the 300ms delay between a physical tap
// and the firing of a click event on mobile browsers
// https://github.com/ftlabs/fastclick
FastClick.attach(document.body)

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept('./routes.json', () => {
    routes = require('./routes.json') // eslint-disable-line global-require
    render(history.getCurrentLocation())
  })
}
