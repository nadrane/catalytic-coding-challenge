import React from 'react'
import styled from 'styled-components'

import { storiesOf } from '@storybook/react'

import {
  BoldTitle,
  NavText,
  SmallBody,
  LeftBarTitle,
  LeftBarText,
  EditableLabel,
  DeleteText,
  SuccessText,
} from '../Typography'

const Black = styled.div`
  background-color: black;
`

// Text that needs black background
storiesOf('Atoms/Typography', module)
  .addDecorator(story => <Black>{story()}</Black>)
  .add('BoldTitle', () => <BoldTitle>I am a bold title!</BoldTitle>)
  .add('NavText', () => <NavText>I am a link!</NavText>)
  .add('LeftBarText', () => <LeftBarText>triggers</LeftBarText>)

storiesOf('Atoms/Typography', module)
  .add('SmallBody', () => <SmallBody>Small Body Text :(</SmallBody>)
  .add('LeftBarTitle', () => <LeftBarTitle>Fill out information</LeftBarTitle>)
  .add('EditableLabel', () => <EditableLabel>Edit Template</EditableLabel>)
  .add('EditableLabel main', () => <EditableLabel main>Edit Template</EditableLabel>)
  .add('DeleteText', () => <DeleteText>Delete</DeleteText>)
  .add('SuccessText', () => <SuccessText>GOOD WORK</SuccessText>)
