import React from 'react'
import {
  mount,
} from 'enzyme'

import{
  NavBlock,
} from '../../Atoms'
import {
  MainNavGroup,
} from '../NavBar'

describe('NavBar/Molecules', () => {
  describe('MainNavGroup', () => {
    const props = {
      links: [
        '1',
        '2',
      ],
    }

    const mountWProps = mount(<MainNavGroup {...props} />)
    it('should render one NavBlock per link in links', () => {
      expect(mountWProps.contains(NavBlock)).toBe(true)
    })
  })
})
