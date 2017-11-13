import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  NavBar,
  Step,
  Process,
  LeftBar,
  Users,
} from '../Organisms'

const leftBarHeaders = [
  'triggers',
  'steps',
]

const leftBarItems = [
  { title: 'Fill out Information', selected: true },
  { title: 'Notify new hire of progress', body: 'Depends on: 1', selected: false },
]

const users = [
  { url: 'https://4d94k01hrcne3r6uas33wqn8-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shield-icon.png', username: 'asdf' },
  { url: 'https://4d94k01hrcne3r6uas33wqn8-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shield-icon.png', username: 'as3df' },
  { url: 'https://4d94k01hrcne3r6uas33wqn8-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shield-icon.png', username: 'asd4f' },
  { url: 'https://4d94k01hrcne3r6uas33wqn8-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shield-icon.png', username: 'as2d4f' },
  { url: 'https://4d94k01hrcne3r6uas33wqn8-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shield-icon.png', username: 'as1df' },
  { url: 'https://4d94k01hrcne3r6uas33wqn8-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shield-icon.png', username: 'as5df' },
  { url: 'https://4d94k01hrcne3r6uas33wqn8-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shield-icon.png', username: 'as6df' },
  { url: 'https://4d94k01hrcne3r6uas33wqn8-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/shield-icon.png', username: 'as8df' },
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
  .add('Users', () => (
    <Users users={users} />
  ))
