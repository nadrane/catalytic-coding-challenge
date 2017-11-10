import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  RoundedButton,
  TextInput,
} from '../General'

storiesOf('Atoms/General', module)
  .add('RoundedButton', () => <RoundedButton>Save Step</RoundedButton>)
  .add('TextInput', () => (
    <div style={{ width: '15rem' }}>
      <TextInput value="asdf" />
    </div>
  ))
