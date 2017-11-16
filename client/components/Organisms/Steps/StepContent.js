import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import {
  Card,
  EditableLabel,
  TextInput,
  TextLabelInput,
  ExpandingTextInput,
  DeleteText,
  SmallBody,
  RoundedButton,
} from '../../Atoms'
import {
  Dependencies,
  Conditions,
} from '../../Molecules'
import {
  StepDropDown,
  Users,
} from '../../Organisms'
import {
  dirtySteps,
} from '../../../store'
import { updateStep } from '../../../store/steps';

const Content = Card.extend`
  margin-top: 1.5rem;
`

const Buttons = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-top: 1.5rem;
`

const StepContent = (props) => {
  const { users, step, saveFiles } = props
  const num = step.role ? step.role.users.length : 0
  const headers = [
    { header: 'Assign User', showNum: true, num, body: <Users users={users} /> },
    { header: 'Maximum Duration', showNum: false, body: <SmallBody>{step.maximumDuration}</SmallBody> },
    {
      header: 'Dependencies',
      showNum: true,
      num: step.previousStepNums && step.previousStepNums.length,
      body: <Dependencies previousStepNums={step.previousStepNums} />,
    },
    {
      header: 'Conditions',
      showNum: true,
      num: step.conditions && step.conditions.length,
      body: <Conditions conditions={step.conditions} />,
    },
    { header: 'Fields', showNum: false },
  ]

  return (
    <Content>
      <TextInput
        onChange={e => props.editStep({ displayName: e.target.value })}
        value={step.displayName}
      />
      <TextLabelInput>Step Name</TextLabelInput>
      <br />
      <EditableLabel fontSize=".8rem">Instructions</EditableLabel>
      <ExpandingTextInput
        value={step.description}
        onChange={e => props.editStep({ description: e.target.value })}
      />
      <TextLabelInput>This will be shown to the user when they are assigned this step as a task.</TextLabelInput>
      <StepDropDown headers={headers} />
      <Buttons>
        <DeleteText>Delete Step</DeleteText>
        {
          saveFiles.steps[step.stepNumber] === 'dirty' && <RoundedButton>Save Step</RoundedButton>
        }
      </Buttons>
    </Content>
  )
}

const mapState = state => ({
  saveFiles: state.saveFiles,
})

const mapDispatch = (dispatch, ownProps) => ({
  editStep: (updated) => {
    dispatch(dirtySteps(ownProps.step.stepNumber))
    dispatch(updateStep(Object.assign(ownProps.step, updated)))
  },
})

export default connect(mapState, mapDispatch)(StepContent)
