import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  NavBlock,
} from '../NavBar'

storiesOf('Atoms/NavBar', module)
  .add('NavBlock', () => <NavBlock>link!</NavBlock>)
