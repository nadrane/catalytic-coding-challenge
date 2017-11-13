import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  AvatarName,
} from '../User'

storiesOf('Molecules/User', module)
  .add('AvatarName', () => <AvatarName url="https://4d94k01hrcne3r6uas33wqn8-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shield-icon.png">sean</AvatarName>)
  .add('AvatarName selected', () => <AvatarName selected url="https://4d94k01hrcne3r6uas33wqn8-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shield-icon.png">slctd</AvatarName>)
