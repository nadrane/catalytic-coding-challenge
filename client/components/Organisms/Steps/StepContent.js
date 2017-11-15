import React from 'react'
import styled from 'styled-components'

import {
  Card,
  EditableLabel,
  TextInput,
  TextLabelInput,
  ExpandingTextInput,
  DeleteText,
  RoundedButton,
} from '../../Atoms'
import {
  StepDropDown,
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
  return (
    <Content>
      <TextInput defaultValue={step.stepName} key={step.stepName} />
      <TextLabelInput>Step Name</TextLabelInput>
      <br />
      <EditableLabel fontSize=".8rem">Instructions</EditableLabel>
      <ExpandingTextInput defaultValue={step.description} key={step.description} />
      <TextLabelInput>This will be shown to the user when they are assigned this step as a task.</TextLabelInput>
      <StepDropDown users={users} num={num} />
      <Buttons>
        <DeleteText>Delete Step</DeleteText>
        <RoundedButton>Save Step</RoundedButton>
      </Buttons>
    </Content>
  )
}
