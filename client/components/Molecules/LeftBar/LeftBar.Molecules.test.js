import React from 'react'
import { mount } from 'enzyme'

import {
  LeftBarListItem,
  SmallerBody,
} from './LeftBarListItem'

describe('LeftBar/Molecules', () => {
  describe('LeftBarListItem', () => {
    const props = {
      assignedTo: ['tom', 'matt'],
      previousStepNums: [1, 2],
    }
    const mountWNoProps = mount(<LeftBarListItem />)
    const mountWProps = mount(<LeftBarListItem {...props} />)
    it('should not render SmallBody if there are no props', () => {
      expect(mountWNoProps.contains(SmallerBody)).toBe(false)
    })
    it('should render 1 SmallBody per prop', () => {
      expect(mountWProps.contains(SmallerBody)).toBe(true)
    })
  })
})
