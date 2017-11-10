import React from 'react'
import { Router } from 'react-router'
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'

import history from './history'
import {
  NavBar,
} from './components'
import {
  getSteps,
} from './store'

class Routes extends React.Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar />
          <Switch>
            <Route path="/step/:id" />
            <Redirect to="/step/1" />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapDispatch = dispatch => ({
  loadInitialData() {
    dispatch(getSteps())
  },
})
export default connect(null, mapDispatch)(Routes)
