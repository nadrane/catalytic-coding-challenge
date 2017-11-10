import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  LeftBarHeader,
} from '../LeftBar'

storiesOf('Molecules/LeftBar', module)
  .add('LeftBarheader', () => <LeftBarHeader>triggers</LeftBarHeader>)
