import * as config from '../configSettings'
import { toggleConfiguration } from '../configSettings';

describe('configSettings actions', () => {
  it('should create action with RESET_CONFIGURATION', () => {
    expect(config.resetConfigurations()).toEqual({ type: config.RESET_CONFIGURATIONS })
  })
  it('should create action with TOGGLE_CONFIGURATION', () => {
    expect(config.toggleConfiguration(1)).toEqual({ type: config.TOGGLE_CONFIGURATION, configID: 1 })
  })
})

describe('configSettings reducer', () => {
  const defaultState = [
    false,
    false,
    false,
    false,
    false,
  ]
  it('should return the initial state', () => {
    expect(config.default(undefined, {})).toEqual(defaultState)
  })
  it('should handle RESET_CONFIGURATIONS', () => {
    expect(config.default([true, true, true, true, true], { type: config.RESET_CONFIGURATIONS })).toEqual(defaultState)
  })
  it('should handle TOGGLE_CONFIGURATION', () => {
    expect(config.default(undefined, { type: config.TOGGLE_CONFIGURATION, configID: 1 })).toEqual([
      false,
      true,
      false,
      false,
      false,
    ])
  })
})
