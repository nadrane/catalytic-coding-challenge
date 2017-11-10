import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  RoundedButton,
} from '../General'

storiesOf('Atoms/General', module)
  .add('RoundedButton', () => <RoundedButton>Save Step</RoundedButton>)
