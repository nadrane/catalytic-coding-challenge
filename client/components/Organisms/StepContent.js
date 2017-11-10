import React from 'react'

import {
  MainSection,
  Card,
  EditableLabel,
  BigTextInput,
} from '../Atoms'

import {
  LabelledInput,
} from '../Molecules'

const Parent = MainSection.extend`
  padding: 2rem 1rem;
  box-sizing: border-box;
`

const Content = Card.extend`
  margin-top: 1.5rem;
`

export default () => (
  <Parent>
    <EditableLabel main>Edit Template</EditableLabel>
    <BigTextInput />
    <Content>
      <LabelledInput>Step Name</LabelledInput>
      <EditableLabel fontSize=".8rem">Instructions</EditableLabel>
      <LabelledInput>
        This will be shown to the user when they are assigned this step as a task.
      </LabelledInput>
    </Content>
  </Parent>
)
