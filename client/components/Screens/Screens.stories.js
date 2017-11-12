import React from 'react'
import { storiesOf } from '@storybook/react'
import { Provider, connect } from 'react-redux'

import {
  Main,
} from '../Screens'
import store, {getProcess, getSteps, getUsers} from '../../store'

class Wrapper extends React.Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    return (this.props.children)
  }
}

const mapDispatch = dispatch => ({
  loadInitialData() {
    dispatch(getSteps())
    dispatch(getProcess())
    dispatch(getUsers())
  },
})

const ConnectedWrapper = connect(null, mapDispatch)(Wrapper)

storiesOf('Screens', module)
  .addDecorator(story => (
    <Provider store={store}>
      <ConnectedWrapper>{story()}</ConnectedWrapper>
    </Provider>))
  .add('Screens', () => <Main />)
