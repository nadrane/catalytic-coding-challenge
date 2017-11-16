import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as saveFiles from '../saveFiles'
const mock = new MockAdapter(axios)

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('saveFiles actions', () => {
  it('should create action with save steps', () => {
    expect(saveFiles.saveSteps('1')).toEqual({
      type: saveFiles.SAVE_STEPS,
      roleID: '1',
    })
  })
  it('should create action with save process', () => {
    expect(saveFiles.saveProcess()).toEqual({
      type: saveFiles.SAVE_PROCESS,
    })
  })
  it('should create action with error steps', () => {
    expect(saveFiles.errorSteps()).toEqual({
      type: saveFiles.ERROR_STEPS,
    })
  })
  it('should create action with error process', () => {
    expect(saveFiles.errorProcess()).toEqual({
      type: saveFiles.ERROR_PROCESS,
    })
  })
  it('should create action with dirty steps', () => {
    expect(saveFiles.dirtySteps('1')).toEqual({
      type: saveFiles.DIRTY_STEPS,
      roleID: '1',
    })
  })
  it('should create action with dirty process', () => {
    expect(saveFiles.dirtyProcess()).toEqual({
      type: saveFiles.DIRTY_PROCESS,
    })
  })
})

describe('async actions saveFiles', () => {
  let store = mockStore()

  afterEach(() => {
    mock.reset()
    store = mockStore()
  })

  it('creates SAVE_STEPS when it is finished putStep', async (done) => {
    const roleID = '1'
    mock.onPut(`/api/steps/${roleID}`).reply(200)
    const expectedActions = [
      { type: saveFiles.SAVE_STEPS, roleID },
    ]
    await store.dispatch(saveFiles.putStep(null, roleID))
    expect(store.getActions()).toEqual(expectedActions)
    done()
  })
  it('creates ERROR_STEPS if theres an error with putStep', async (done) => {
    const roleID = '1'
    mock.onPut(`api/steps/${roleID}`).networkError()
    const expectedActions = [
      { type: saveFiles.ERROR_STEPS },
    ]
    await store.dispatch(saveFiles.putStep(null, roleID))
    expect(store.getActions()).toEqual(expectedActions)
    done()
  })
  it('creates SAVE_PROCESS when it is finished with putProcess', async (done) => {
    mock.onPut('/api/process').reply(200)
    const expectedActions = [
      { type: saveFiles.SAVE_PROCESS },
    ]
    await store.dispatch(saveFiles.putProcess())
    expect(store.getActions()).toEqual(expectedActions)
    done()
  })
  it('creates ERROR_PROCESS if putProcess has error', async (done) => {
    mock.onPut('/api/process').networkError()
    const expectedActions = [
      { type: saveFiles.ERROR_PROCESS },
    ]
    await store.dispatch(saveFiles.putProcess())
    expect(store.getActions()).toEqual(expectedActions)
    done()
  })
})

describe('saveFiles reducer', () => {
  const defaultState = {
    steps: { error: false },
    process: 'clean',
  }

  it('should return the initial state', () => {
    expect(saveFiles.default(undefined, {})).toEqual(defaultState)
  })
  it('should handle SAVE_STEPS', () => {
    expect(saveFiles.default(defaultState, {
      type: saveFiles.SAVE_STEPS,
      roleID: '1',
    })).toEqual(Object.assign(defaultState, { steps: { error: false, 1: 'saved' } }))
  })
  it('should handle SAVE_PROCESS', () => {
    expect(saveFiles.default(defaultState, {
      type: saveFiles.SAVE_PROCESS,
    })).toEqual(Object.assign(defaultState, {
      process: 'saved',
    }))
  })
  it('should handle ERROR_STEPS', () => {
    expect(saveFiles.default(defaultState, {
      type: saveFiles.ERROR_STEPS,
    })).toEqual(Object.assign(defaultState, {
      steps: {
        error: true,
      },
    }))
  })
  it('should handle ERROR_PROCESS', () => {
    expect(saveFiles.default(defaultState, {
      type: saveFiles.ERROR_PROCESS,
    })).toEqual(Object.assign(defaultState, {
      process: 'error',
    }))
  })
  it('should handle DIRTY_STEPS', () => {
    expect(saveFiles.default(Object.assign(defaultState, {
      steps: {
        2: 'dirty',
      },
    }), {
      type: saveFiles.DIRTY_STEPS,
      roleID: '1',
    })).toEqual(Object.assign(defaultState, {
      steps: {
        1: 'dirty',
        2: 'dirty',
      },
    }))
  })
  it('should handle DIRTY_PROCESS', () => {
    expect(saveFiles.default(defaultState, {
      type: saveFiles.DIRTY_PROCESS,
    })).toEqual(Object.assign(defaultState, {
      process: 'dirty',
    }))
  })
})
