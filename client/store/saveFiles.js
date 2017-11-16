import axios from 'axios'

const SAVE_STEPS = 'SAVE_STEPS'
const SAVE_PROCESS = 'SAVE_PROCESS'
const ERROR_STEPS = 'ERROR_STEPS'
const ERROR_PROCESS = 'ERROR_PROCESS'
const DIRTY_STEPS = 'DIRTY_STEPS'
const DIRTY_PROCESS = 'DIRTY_PROCESS'

export const saveSteps = () => ({ type: SAVE_STEPS })
export const saveProcess = () => ({ type: SAVE_PROCESS })
export const errorSteps = () => ({ type: ERROR_STEPS })
export const errorProcess = () => ({ type: ERROR_PROCESS })
export const dirtySteps = () => ({ type: DIRTY_STEPS })
export const dirtyProcess = () => ({ type: DIRTY_PROCESS })

const defaultState = {
  steps: 'clean',
  process: 'clean',
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_STEPS:
      return Object.assign({}, state, { steps: 'clean' })
    case SAVE_PROCESS:
      return Object.assign({}, state, { process: 'clean' })
    case ERROR_STEPS:
      return Object.assign({}, state, { steps: 'error' })
    case ERROR_PROCESS:
      return Object.assign({}, state, { process: 'error' })
    case DIRTY_STEPS:
      return Object.assign({}, state, { steps: 'dirty' })
    case DIRTY_PROCESS:
      return Object.assign({}, state, { process: 'dirty' })
    default:
      return state
  }
}
