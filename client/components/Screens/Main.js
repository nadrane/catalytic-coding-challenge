import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  MainSection,
  UserImg,
} from '../Atoms'
import {
  LeftBar,
  StepContent,
  Process,
} from '../Organisms'
import {
  updateActiveStep,
} from '../../store'

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

const Main = (props) => {
  const steps = props.steps.map(step => Object.assign(
    step,
    {
      selected: step.stepNumber === props.activeStep,
      onClick: () => props.changeActiveStep(step.stepNumber),
    },
  ))

  const displayStep = props.steps.find(step => step.stepNumber === props.activeStep) || {}

  return (
    <Parent>
      <LeftBar headers={leftBarHeaders} items={steps} />
      <Body>
        <Process />
        <UserImg />
        <StepContent step={displayStep} />
      </Body>
    </Parent>
  )
}

const mapState = state => ({
  steps: state.steps,
  activeStep: state.activeStep,
})

const mapDispatch = dispatch => ({
  changeActiveStep: id => dispatch(updateActiveStep(id)),
})

export default connect(mapState, mapDispatch)(Main)
