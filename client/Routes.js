import React from 'react'
import { Router } from 'react-router'
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import history from './history'
import {
  NavBar,
} from './components'

class Routes extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar />
          <Switch>
            <Route path="/step/:id" component={NavBar} />
            <Redirect to="/step/1" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Routes
