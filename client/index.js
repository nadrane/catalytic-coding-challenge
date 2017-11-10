import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Routes from './Routes'
import './index.scss'
// import store from './store'
// <Provider store={store}>
// </Provider>,

ReactDOM.render(
  <Routes />,
  document.getElementById('app'),
)
