import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  RoundedButton,
  TextInput,
  BigTextInput,
  TextLabelInput,
  MainSection,
  ExpandingTextInput,
} from '../General'

storiesOf('Atoms/General', module)
  .add('RoundedButton', () => <RoundedButton>Save Step</RoundedButton>)
  .add('TextInput', () => (
    <div style={{ width: '15rem' }}>
      <TextInput value="asdf" />
    </div>
  ))
  .add('BigTextInput', () => (
    <div style={{ width: '15rem' }}>
      <BigTextInput value="asdf" />
    </div>
  ))
  .add('TextLabelInput', () => (
    <TextLabelInput>Step Name</TextLabelInput>
  ))
  .add('MainSection', () => (
    <MainSection>ASDF</MainSection>
  ))
  .add('ExpandingTextInput', () => (
    <ExpandingTextInput />
  ))
