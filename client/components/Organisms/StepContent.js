import React from 'react'

import {
  Card,
  EditableLabel,
} from '../Atoms'

import {
  LabelledInput,
} from '../Molecules'

const Content = Card.extend`
  margin-top: 1.5rem;
`

export default () => (

  <Content>
    <LabelledInput>Step Name</LabelledInput>
    <EditableLabel fontSize=".8rem">Instructions</EditableLabel>
    <LabelledInput>
      This will be shown to the user when they are assigned this step as a task.
    </LabelledInput>
  </Content>

)
