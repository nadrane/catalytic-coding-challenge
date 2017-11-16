import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  withRouter,
} from 'react-router'

import {
  MainSection,
} from '../Atoms'
import {
  LeftBar,
  StepContent,
  Process,
} from '../Organisms'
import {
  toggleUserStep,
  dirtySteps,
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

const matchStepNameToNumber = (stepName, steps) => {
  const match = steps.find(step => stepName === step.stepName)
  return match ? match.stepNumber : null
}

const Main = (props) => {
  const steps = props.steps.map(step => Object.assign(
    step,
    {
      selected: step.stepNumber === props.activeStep,
      onClick: () => props.updateActiveStep(step.stepNumber),
      assignedTo: step.role.users.map(user => matchIdToUserName(user, props.users)),
      previousStepNums: step.requiredPreviousSteps.map(prevStep => (matchStepNameToNumber(prevStep, props.steps))).filter(ele => ele),
      maximumDuration: step.maximumDuration || 'No maximum',
    },
  ))

  const displayStep = props.steps.find(step => step.stepNumber === props.activeStep) || {}

  const users = props.users.map((user, index) => Object.assign(
    user,
    {
      onClick: () => props.toggleUser(user.userID, props.steps.find(step => step.stepNumber === props.activeStep).roleID),
      selected: displayStep.role.users.includes(user.userID),
      url: `/images/avatars/pb_${(index % 3) + 1}.jpg`,
    },
  ))

  return (
    <Parent>
      <LeftBar headers={leftBarHeaders} items={steps} />
      <Body>
        <Process />
        <StepContent step={displayStep} users={users} />
      </Body>
    </Parent>
  )
}

const mapState = (state, ownProps) => ({
  steps: state.steps,
  users: state.users,
  activeStep: +ownProps.match.params.id,
})

const mapDispatch = dispatch => ({
  toggleUser: (userId, roleID) => {
    dispatch(toggleUserStep(roleID, userId))
    dispatch(dirtySteps(roleID))
  },
})

export default withRouter(connect(mapState, mapDispatch)(Main))
