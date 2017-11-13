import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Peeker,
  UserImg,
} from '../Media'

storiesOf('Atoms/Media', module)
  .add('Peeker', () => <Peeker />)
  .add('UserImg (random)', () => <UserImg />)
