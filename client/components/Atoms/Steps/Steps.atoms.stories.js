import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  DropDownHeader,
} from '../Steps'

storiesOf('Atoms/Steps', module)
  .add('DropDownHeader with num closed', () => (
    <DropDownHeader showNum num={0}>Assign User</DropDownHeader>
  ))
  .add('DropDownHeader without num', () => (
    <DropDownHeader>Assign User</DropDownHeader>
  ))
  .add('DropDownheader Open', () => (
    <DropDownHeader open>Assign User</DropDownHeader>
  ))
