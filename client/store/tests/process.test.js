import * as proce from '../process'

describe('Process actions', () => {
  it('should create action with read process', () => {
    const passedData = {
      teamName: 'catalytic',
      processName: 'onboard',
    }

    const expectedAction = {
      type: proce.READ_PROCESS,
      proce: passedData,
    }
    expect(proce.readProcess(passedData)).toEqual(expectedAction)
  })
  it('should create action with update process', () => {
    const passedData = {
      teamName: 'catalytic',
      processName: 'onboard',
    }

    const expectedAction = {
      type: proce.UPDATE_PROCESS,
      proce: passedData,
    }
    expect(proce.updateProcess(passedData)).toEqual(expectedAction)
  })
})
describe('Process reducer', () => {
  it('should return the initial state', () => {
    expect(proce.default(undefined, {})).toEqual({})
  })
  it('should handle READ_PROCESS', () => {
    const passedData = {
      teamName: 'catalytic',
      processName: 'onboard',
    }
    expect(proce.default({}, { type: proce.READ_PROCESS, proce: passedData })).toEqual(passedData)
  })
  it('should handle UPDATE_PROCESS', () => {
    const passedData = {
      teamName: 'catalytic',
      processName: 'onboard',
    }
    expect(proce.default({ teamName: 'asdf', priority: 'high' }, { type: proce.UPDATE_PROCESS, proce: passedData })).toEqual({ teamName: 'catalytic', processName: 'onboard', priority: 'high' })
  })
})
