import React from 'react'
import { mount } from 'enzyme'

import {
  DropDown,
} from '../../Molecules'
import {
  StepDropDown,
} from './StepDropDown'

describe('Steps/Organisms', () => {
  describe('StepDropDown', () => {
    const headers = [
      { header: 'a' },
      { header: 'b' },
    ]

    const mountWProps = mount(<StepDropDown toggleConfiguration={() => 1} configSettings={[true, true]} headers={headers} />)
    it('should render one DropDown per headers', () => {
      expect(mountWProps.find(DropDown).length).toBe(headers.length)
    })
  })
})
