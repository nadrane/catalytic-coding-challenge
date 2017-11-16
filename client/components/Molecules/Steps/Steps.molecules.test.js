import React from 'react'
import { mount } from 'enzyme'

import {
  Conditions,
  Dependencies,
  DropDown,
} from '../Steps'
import {
  DropDownHeader,
  SmallBody,
} from '../../Atoms'

describe('Steps/Molecules', () => {
  describe('Conditions', () => {
    const props = {
      conditions: [
        'eat first',
        'work out first',
      ],
    }
    const mountWProps = mount(<Conditions {...props} />)
    const mountNoProps = mount(<Conditions />)
    it('should render one li per condition', () => {
      expect(mountWProps.find('ul').children().length).toBe(props.conditions.length)
    })
    it('should render SmallBody if there is no condition', () => {
      expect(mountNoProps.contains(SmallBody)).toBe(true)
    })
    it('should not render ul if there is no condition', () => {
      expect(mountNoProps.find('ul').length).toBe(0)
    })
  })
  describe('Dependencies', () => {
    const props = {
      previousStepNums: [
        1,
        3,
      ],
    }
    const mountWProps = mount(<Dependencies {...props} />)
    const mountNoProps = mount(<Dependencies />)
    it('should render one li per condition', () => {
      expect(mountWProps.find('ul').children().length).toBe(props.previousStepNums.length)
    })
    it('should render SmallBody if there is no condition', () => {
      expect(mountNoProps.contains(SmallBody)).toBe(true)
    })
    it('should not render ul if there is no condition', () => {
      expect(mountNoProps.find('ul').length).toBe(0)
    })
  })
  describe('DropDown', () => {
    const mockCB = jest.fn()
    const props = {
      open: true,
      onClick: mockCB,
      num: 3,
      showNum: true,
    }
    const mountWProps = mount(<DropDown {...props}><a>hi</a></DropDown>)
    const mountNoProps = mount(<DropDown><a>hi</a></DropDown>)
    it('should not render children if no props', () => {
      expect(mountNoProps.contains(<a>hi</a>)).toBe(false)
    })
    it('should render children if open props', () => {
      expect(mountWProps.contains(<a>hi</a>)).toBe(true)
    })
    it('should pass down its props to DropDownHeader', () => {
      expect(mountWProps.find(DropDownHeader).props()).toEqual(props)
    })
  })
})
