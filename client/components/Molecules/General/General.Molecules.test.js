import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

import {
  BigTextInput,
  TextLabelInput,
  TextInput,
} from '../../Atoms'
import {
  LabelledInput,
} from '../General'

const props = {
  bigInput: true,
  otherProp: true,
}

const smallProps = {
  bigInput: false,
}

describe('General/Molecules', () => {
  describe('LabelledInput', () => {
    const shallowStandard = shallow(<LabelledInput />)
    const shallowLarge = shallow(<LabelledInput {...props} />)
    const shallowSmall = shallow(<LabelledInput {...smallProps} />)
    it('should render itself', () => {
      expect(shallowToJson(shallowStandard)).toMatchSnapshot()
    })
    it('should render TextLabelInput always', () => {
      expect(shallowLarge.find(TextLabelInput).length).toBe(1)
    })
    it('should pass down all props except bigInput and children', () => {
      expect(shallowLarge.find(BigTextInput).length).toBe(1)
      expect(shallowLarge.children().length).toBe(2)
      expect(shallowLarge.find(BigTextInput).prop('otherProp')).toBe(true)
    })
    it('should load TextInput if bigInput is false', () => {
      expect(shallowSmall.find(TextInput).length).toBe(1)
      expect(shallowSmall.children().length).toBe(2)
    })
  })
})
