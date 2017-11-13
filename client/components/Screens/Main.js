import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  MainSection,
} from '../Atoms'
import {
  LeftBar,
  StepContent,
  Process,
} from '../Organisms'

const Parent = styled.main`
  display: flex;
  height: 100%;
`

const Body = MainSection.extend`
  padding: 2rem 1rem;
  box-sizing: border-box;
`

const leftBarHeaders = [
  'triggers',
  'steps',
]

const Main = props => (
  <Parent>
    <LeftBar headers={leftBarHeaders} items={props.steps} />
    <Body>
      <Process />
      <StepContent />
    </Body>
  </Parent>
)

const mapState = state => ({
  steps: state.steps,
})

export default connect(mapState)(Main)
