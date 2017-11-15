import React from 'react'
import styled from 'styled-components'

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
  StepDropDown,
  Users,
} from '../../Organisms'

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

export default (props) => {
  const { users, step } = props
  const num = step.role ? step.role.users.length : 0
  const headers = [
    { header: 'Assign User', showNum: true, num, body: <Users users={users} /> },
    { header: 'Maximum Duration', showNum: false, body: <SmallBody>{step.maximumDuration}</SmallBody> },
    {
      header: 'Dependencies',
      showNum: true,
      num: step.previousStepNums && step.previousStepNums.length,
      body: (
        step.previousStepNums &&
        step.previousStepNums.length ?
          (
            <ul>
              {
                step.previousStepNums && step.previousStepNums.map(stepNum => <li key={stepNum}>{stepNum}</li>)
              }
            </ul>
          ) :
          <SmallBody>No Dependencies</SmallBody>
      ),
    },
    {
      header: 'Conditions',
      showNum: true,
      num: step.conditions && step.conditions.length,
      body: (
        <ul>
          {
            step.conditions && step.conditions.map(condition => <li key={condition}>{condition}</li>)
          }
        </ul>
      ),
    },
    { header: 'Fields', showNum: false },
  ]

  return (
    <Content>
      <TextInput defaultValue={step.displayName} key={step.displayName} />
      <TextLabelInput>Step Name</TextLabelInput>
      <br />
      <EditableLabel fontSize=".8rem">Instructions</EditableLabel>
      <ExpandingTextInput defaultValue={step.description} key={step.description} />
      <TextLabelInput>This will be shown to the user when they are assigned this step as a task.</TextLabelInput>
      <StepDropDown headers={headers} />
      <Buttons>
        <DeleteText>Delete Step</DeleteText>
        <RoundedButton>Save Step</RoundedButton>
      </Buttons>
    </Content>
  )
}
