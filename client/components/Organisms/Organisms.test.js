import React from 'react'
import { shallow } from 'enzyme'

import {
  LeftBarHeader,
} from '../Molecules'
import {
  LeftBar,
  Users,
} from '../Organisms'
import {
  Process,
} from './Process'

describe('Organisms', () => {
  describe('LeftBar', () => {
    const props = {
      items: [
        { stepNumber: 1 },
        { stepNumber: 2 },
      ],
      headers: [
        'as',
        'head',
        '23',
      ],
    }

    const mountWProps = shallow(<LeftBar {...props} />)
    it('should render one LeftBarHeader per header', () => {
      expect(mountWProps.find(LeftBarHeader).length).toBe(props.headers.length)
    })
  })
  describe('Process', () => {
    const props = {
      saveFiles: {
        process: 'dirty',
      },
      process: {},
      editProcess: () => 1,
    }

    const mountWProps = shallow(<Process {...props} />)
    it('should only have two children if not editing', () => {
      expect(mountWProps.children().length).toBe(2)
    })
    it('should three children if editing', () => {
      mountWProps.children().last().simulate('click')
      expect(mountWProps.children().length).toBe(3)
    })
  })
  describe('Users', () => {
    const props = {
      users: [
        { userID: 1 },
        { userID: 2 },
        { userID: 3 },
        { userID: 4 },
      ],
    }

    const mountWProps = shallow(<Users {...props} />)
    it('should have one child for each user and one for clear', () => {
      expect(mountWProps.children().length).toBe(props.users.length + 1)
    })
  })
})
