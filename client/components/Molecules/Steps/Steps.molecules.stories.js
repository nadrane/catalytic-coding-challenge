import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  DropDown,
} from '../Steps'

storiesOf('Molecules/Steps', module)
  .add('DropDown', () => (
    <DropDown header="header">BODY</DropDown>
  ))
