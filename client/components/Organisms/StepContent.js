import React from 'react'

import {
  Card,
  EditableLabel,
  TextInput,
  TextLabelInput,
  ExpandingTextInput,
} from '../Atoms'
import {
  DropDown,
} from '../Molecules'
import {
  Users,
} from '../Organisms'

const Content = Card.extend`
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
      <DropDown header="Assign User" showNum num={num}>
        <Users users={users} />
      </DropDown>
    </Content>
  )
}
