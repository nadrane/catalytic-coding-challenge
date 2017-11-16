import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  LeftBarHeader,
  LeftBarListItem,
} from '../LeftBar'

storiesOf('Molecules/LeftBar', module)
  .add('LeftBarheader', () => <LeftBarHeader>triggers</LeftBarHeader>)
  .addDecorator(story => <ol style={{ width: '300px' }}>{story()}</ol>)
  .add('LeftBarListItem', () => (
    <LeftBarListItem title="Set up Slack account" />
  ))
  .add('LeftBarListItem selected', () => (
    <LeftBarListItem
      selected
      assignedTo={['sean']}
      title="Set up Slack account"
      previousStepNums={[1, 2]}
    />
  ))
