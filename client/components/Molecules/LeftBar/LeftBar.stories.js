import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  LeftBarHeader,
  LeftBarListItem,
} from '../LeftBar'

storiesOf('Molecules/LeftBar', module)
  .add('LeftBarheader', () => <LeftBarHeader>triggers</LeftBarHeader>)
  .add('LeftBarListItem', () => (
    <ol>
      <LeftBarListItem title="Set up Slack acount">Depends on 3</LeftBarListItem>
    </ol>
  ))
  .add('LeftBarListItem selected', () => (
    <ol>
      <LeftBarListItem selected title="Set up Slack account">Depends on 3</LeftBarListItem>
    </ol>
  ))
