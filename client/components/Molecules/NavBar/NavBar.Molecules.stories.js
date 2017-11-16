import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  NavIcon,
  MainNavGroup,
} from '../NavBar'

const links = [
  'tasks',
  'routines',
  'templates',
]

storiesOf('Molecules/NavBar', module)
  .add('NavIcon', () => <NavIcon />)
  .add('MainNavGroup', () => <MainNavGroup links={links} />)
