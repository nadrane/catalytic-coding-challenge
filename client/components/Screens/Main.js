import React from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

import {
  LeftBar,
  StepContent,
} from '../Organisms'

const Parent = styled.main`
  display: flex;
  height: 100%;
`

const leftBarHeaders = [
  'triggers',
  'steps',
]

const Main = props => (
  <Parent>
    <LeftBar headers={leftBarHeaders} items={props.steps} />
    <StepContent />
  </Parent>
)

const mapState = state => ({
  steps: state.steps,
})

export default connect(mapState)(Main)
