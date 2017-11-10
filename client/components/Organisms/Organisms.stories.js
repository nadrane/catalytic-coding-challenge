import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  NavBar,
  LeftBar,
} from '../Organisms'

storiesOf('Organisms', module)
  .add('NavBar', () => <NavBar />)
  .add('LeftBar', () => <LeftBar />)
