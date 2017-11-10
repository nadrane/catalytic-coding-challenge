import React from 'react'
import { Router } from 'react-router'
import {
  Route,
  Switch,
} from 'react-router-dom'

import history from './history'
import {

} from './components'

class Routes extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Router history={history}>

      </Router>
    )
  }
}
