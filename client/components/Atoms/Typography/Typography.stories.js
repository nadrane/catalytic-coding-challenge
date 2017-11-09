import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  BoldTitle,
} from '../Typography'

storiesOf('Typography/BoldTitle', module)
  .add('BoldTitle', () => <BoldTitle>I am a bold title!</BoldTitle>)
