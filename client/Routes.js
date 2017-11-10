import React from 'react'
import { Router } from 'react-router'
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'

import history from './history'
import {
  NavBar,
  Main,
} from './components'
import {
  getSteps,
  getProcess,
  getUsers,
} from './store'

const Parent = styled.div`
  height: 100%;s
`

class Routes extends React.Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (
      <Router history={history}>
        <Parent>
          <NavBar />
          <Switch>
            <Route path="/step/:id" component={Main} />
            <Redirect to="/step/1" />
          </Switch>
        </Parent>
      </Router>
    )
  }
}

const mapDispatch = dispatch => ({
  loadInitialData() {
    dispatch(getSteps())
    dispatch(getProcess())
    dispatch(getUsers())
  },
})
export default connect(null, mapDispatch)(Routes)
