import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  Peeker,
  UserImg,
} from '../Media'

storiesOf('Atoms/Media', module)
  .add('Peeker', () => <Peeker />)
  .add('UserImg (random)', () => <UserImg url="https://4d94k01hrcne3r6uas33wqn8-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shield-icon.png" />)
