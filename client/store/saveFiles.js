import axios from 'axios'

const SAVE_STEPS = 'SAVE_STEPS'
const SAVE_PROCESS = 'SAVE_PROCESS'
const ERROR_STEPS = 'ERROR_STEPS'
const ERROR_PROCESS = 'ERROR_PROCESS'
const DIRTY_STEPS = 'DIRTY_STEPS'
const DIRTY_PROCESS = 'DIRTY_PROCESS'

export const saveSteps = stepNumber => ({ type: SAVE_STEPS, stepNumber })
export const errorSteps = stepNumber => ({ type: ERROR_STEPS, stepNumber })
export const dirtySteps = stepNumber => ({ type: DIRTY_STEPS, stepNumber })
export const saveProcess = () => ({ type: SAVE_PROCESS })
export const errorProcess = () => ({ type: ERROR_PROCESS })
export const dirtyProcess = () => ({ type: DIRTY_PROCESS })

const defaultState = {
  steps: {},
  process: 'clean',
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_STEPS:
      return Object.assign({}, state, { steps: { [action.stepNumber]: 'clean' } })
    case SAVE_PROCESS:
      return Object.assign({}, state, { process: 'clean' })
    case ERROR_STEPS:
      return Object.assign({}, state, { steps: { [action.stepNumber]: 'error' } })
    case ERROR_PROCESS:
      return Object.assign({}, state, { process: 'error' })
    case DIRTY_STEPS:
      return Object.assign({}, state, { steps: { [action.stepNumber]: 'dirty' } })
    case DIRTY_PROCESS:
      return Object.assign({}, state, { process: 'dirty' })
    default:
      return state
  }
}
