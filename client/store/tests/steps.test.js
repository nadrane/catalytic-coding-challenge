import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as steps from '../steps'
import {
  ERROR_STEPS,
} from '../saveFiles'

const mock = new MockAdapter(axios)
const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('steps actions', () => {
  const mockStep = {
    roleID: '123',
  }
  it('should create action with create step', () => {
    expect(steps.createStep(mockStep)).toEqual({
      type: steps.CREATE_STEP,
      step: mockStep,
    })
  })
  it('should create action with read steps', () => {
    expect(steps.readSteps(mockStep)).toEqual({
      type: steps.READ_STEPS,
      steps: mockStep,
    })
  })
  it('should create action with update step', () => {
    expect(steps.updateStep(mockStep)).toEqual({
      type: steps.UPDATE_STEP,
      step: mockStep,
    })
  })
  it('should create action with delete step', () => {
    expect(steps.deleteStep('123')).toEqual({
      type: steps.DELETE_STEP,
      roleID: '123',
    })
  })
  it('should create action with toggleUserStep', () => {
    expect(steps.toggleUserStep('123', '2')).toEqual({
      type: steps.TOGGLE_USER_STEP,
      roleID: '123',
      userID: '2',
    })
  })
  it('should create action with clear all user step', () => {
    expect(steps.clearAllUserStep('123')).toEqual({
      type: steps.CLEAR_ALL_USER_STEP,
      roleID: '123',
    })
  })
})

describe('async actions steps', () => {
  let store = mockStore()

  afterEach(() => {
    mock.reset()
    store = mockStore()
  })

  it('creates READ_STEPS when it is finished getSteps', async (done) => {
    const mockData = {
      roleID: '123',
    }
    mock.onGet('/api/steps').reply(200, mockData)
    const expectedActions = [
      { type: steps.READ_STEPS, steps: mockData },
    ]
    await store.dispatch(steps.getSteps())
    expect(store.getActions()).toEqual(expectedActions)
    done()
  })
  it('creates ERROR_STEPS when if getSteps erros', async (done) => {
    mock.onGet('/api/steps').networkError()
    const expectedActions = [
      { type: ERROR_STEPS },
    ]
    await store.dispatch(steps.getSteps())
    expect(store.getActions()).toEqual(expectedActions)
    done()
  })
})

describe('steps reducer', () => {
  const defaultState = []
  const fakeStep1 = {
    roleID: '123',
    name: '324',
    stepNumber: 1,
    role: {
      users: [],
    },
  }
  const fakeStep2 = {
    roleID: '255',
    name: 'eat veggies',
    stepNumber: 2,
    role: {
      users: ['1'],
    },
  }

  it('should return the default state', () => {
    expect(steps.default(undefined, {})).toEqual(defaultState)
  })
  it('should handle CREATE_STEP', () => {
    expect(steps.default(
      [fakeStep1],
      {
        type: steps.CREATE_STEP,
        step: fakeStep2,
      },
    )).toEqual([fakeStep1, fakeStep2])
  })
  it('should handle READ_STEPS', () => {
    expect(steps.default(
      undefined,
      {
        type: steps.READ_STEPS,
        steps: [fakeStep1, fakeStep2],
      },
    )).toEqual([fakeStep1, fakeStep2])
  })
  it('should handle UPDATE_STEP', () => {
    const newFakeStep2 = {
      roleID: '255',
      name: 'eat cookies',
      stepNumber: 2,
    }
    expect(steps.default(
      [fakeStep1, fakeStep2],
      {
        type: steps.UPDATE_STEP,
        step: newFakeStep2,
      },
    )).toEqual([fakeStep1, newFakeStep2])
  })
  it('should handle TOGGLE_USER_STEP if the user isnt selected', () => {
    expect(steps.default(
      [fakeStep1],
      {
        type: steps.TOGGLE_USER_STEP,
        roleID: '123',
        userID: '1',
      },
    )).toEqual([{
      roleID: '123',
      name: '324',
      stepNumber: 1,
      role: {
        users: ['1'],
      },
    }])
  })
  it('should handle TOGGLE_USER_STEP if the user is already selected', () => {
    expect(steps.default(
      [fakeStep2],
      {
        type: steps.TOGGLE_USER_STEP,
        roleID: '255',
        userID: '1',
      },
    )).toEqual([{
      roleID: '255',
      name: 'eat veggies',
      stepNumber: 2,
      role: {
        users: [],
      },
    }])
  })
  it('should handle DELETE_STEP', () => {
    expect(steps.default(
      [fakeStep1],
      {
        type: steps.DELETE_STEP,
        roleID: '123',
      },
    )).toEqual([])
  })
  it('should handle CLEAR_ALL_USER_STEP', () => {
    expect(steps.default(
      [fakeStep2],
      {
        type: steps.CLEAR_ALL_USER_STEP,
        roleID: '255',
      },
    )).toEqual([{
      roleID: '255',
      name: 'eat veggies',
      stepNumber: 2,
      role: {
        users: [],
      },
    }])
  })
})
