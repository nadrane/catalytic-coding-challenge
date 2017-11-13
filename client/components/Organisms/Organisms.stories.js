import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  NavBar,
  Step,
  Process,
  LeftBar,
} from '../Organisms'

const leftBarHeaders = [
  'triggers',
  'steps',
]

const leftBarItems = [
  { title: 'Fill out Information', selected: true },
  { title: 'Notify new hire of progress', body: 'Depends on: 1', selected: false },
]

storiesOf('Organisms', module)
  .add('NavBar', () => <NavBar />)
  .add('LeftBar', () => <LeftBar headers={leftBarHeaders} items={leftBarItems} />)
  .add('Step', () => (
    <div style={{ height: '50vh', width: '50vw' }}>
      <Step />
    </div>
  ))
  .add('Process', () => (
    <Process />
  ))
