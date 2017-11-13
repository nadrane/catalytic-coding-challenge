import React from 'react'

import {
  Card,
  EditableLabel,
  TextInput,
  TextLabelInput,
  ExpandingTextInput,
} from '../Atoms'
import {
  LabelledInput,
} from '../Molecules'

const Content = Card.extend`
  margin-top: 1.5rem;
`

export default props => (
  <Content>
    <TextInput defaultValue={props.step.stepName} key={props.step.stepName} />
    <TextLabelInput>Step Name</TextLabelInput>
    <br />
    <EditableLabel fontSize=".8rem">Instructions</EditableLabel>
    <ExpandingTextInput>{props.step.description}</ExpandingTextInput>
    <TextLabelInput>This will be shown to the user when they are assigned this step as a task.</TextLabelInput>
  </Content>
)
