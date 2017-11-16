import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  LabelledInput,
} from '../General'

storiesOf('Molecules/General', module)
  .add('LabelledInput', () => <LabelledInput>Step Name</LabelledInput>)
  .add('LabelledInput bigInput', () => <LabelledInput bigInput>Step Name</LabelledInput>)
