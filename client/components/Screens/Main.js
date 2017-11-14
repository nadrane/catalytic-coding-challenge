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
  toggleUserStep,
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

const matchIdToUserName = (userID, users) =>
  users.find(user => user.userID === userID).username

const Main = (props) => {
  const steps = props.steps.map(step => Object.assign(
    step,
    {
      selected: step.stepNumber === props.activeStep,
      onClick: () => props.updateActiveStep(step.stepNumber),
      assignedTo: step.role.users.map(user => matchIdToUserName(user, props.users)),
    },
  ))

  const displayStep = props.steps.find(step => step.stepNumber === props.activeStep) || {}

  const users = props.users.map(user => Object.assign(
    user,
    {
      onClick: () => props.toggleUser(user.userID, props.activeStep),
      selected: displayStep.role.users.includes(user.userID),
    },
  ))

  return (
    <Parent>
      <LeftBar headers={leftBarHeaders} items={steps} />
      <Body>
        <Process />
        <UserImg />
        <StepContent step={displayStep} users={users} />
      </Body>
    </Parent>
  )
}

const mapState = state => ({
  steps: state.steps,
  activeStep: state.activeStep,
  users: state.users,
})

const mapDispatch = dispatch => ({
  updateActiveStep: id => dispatch(updateActiveStep(id)),
  toggleUser: (userId, activeStep) => {
    dispatch(toggleUserStep(activeStep, userId))
  },
})

export default connect(mapState, mapDispatch)(Main)
