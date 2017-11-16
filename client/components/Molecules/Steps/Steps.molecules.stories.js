import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  DropDown,
  Dependencies,
  Conditions,
} from '../Steps'

storiesOf('Molecules/Steps', module)
  .add('DropDown', () => (
    <DropDown header="header">BODY</DropDown>
  ))
  .add('Dependencies Empty', () => (
    <Dependencies />
  ))
  .add('Dependencies', () => (
    <Dependencies previousStepNums={[1, 2]} />
  ))
  .add('Conditions', () => (
    <Conditions conditions={['eat good', 'asdf']} />
  ))
  .add('Conditions empty', () => (
    <Conditions />
  ))
