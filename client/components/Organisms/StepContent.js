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
  const { users } = props

  return (
    <Content>
      <TextInput defaultValue={props.step.stepName} key={props.step.stepName} />
      <TextLabelInput>Step Name</TextLabelInput>
      <br />
      <EditableLabel fontSize=".8rem">Instructions</EditableLabel>
      <ExpandingTextInput>{props.step.description}</ExpandingTextInput>
      <TextLabelInput>This will be shown to the user when they are assigned this step as a task.</TextLabelInput>
      <DropDown header="Assign User" showNum num={0}>
        <Users users={users} />
      </DropDown>
    </Content>
  )
}
