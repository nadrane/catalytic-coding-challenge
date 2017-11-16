import axios from 'axios'

export const SAVE_STEPS = 'SAVE_STEPS'
export const SAVE_PROCESS = 'SAVE_PROCESS'
export const ERROR_STEPS = 'ERROR_STEPS'
export const ERROR_PROCESS = 'ERROR_PROCESS'
export const DIRTY_STEPS = 'DIRTY_STEPS'
export const DIRTY_PROCESS = 'DIRTY_PROCESS'

export const saveSteps = roleID => ({ type: SAVE_STEPS, roleID })
export const errorSteps = () => ({ type: ERROR_STEPS })
export const dirtySteps = roleID => ({ type: DIRTY_STEPS, roleID })
export const saveProcess = () => ({ type: SAVE_PROCESS })
export const errorProcess = () => ({ type: ERROR_PROCESS })
export const dirtyProcess = () => ({ type: DIRTY_PROCESS })

export const putStep = (step, roleID) =>
  async (dispatch) => {
    try {
      await axios.put(`/api/steps/${roleID}`, step)
      dispatch(saveSteps(roleID))
    } catch (error) {
      dispatch(errorSteps())
    }
  }

export const putProcess = () =>
  async (dispatch, getState) => {
    try {
      const state = getState()
      const proce = state.process
      await axios.put('/api/process', proce)
      dispatch(saveProcess())
    } catch (error) {
      dispatch(errorProcess())
    }
  }

const defaultState = {
  steps: { error: false },
  process: 'clean',
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_STEPS:
      return Object.assign({}, state, { steps: { error: false, [action.roleID]: 'saved' } })
    case SAVE_PROCESS:
      return Object.assign({}, state, { process: 'saved' })
    case ERROR_STEPS:
      return Object.assign({}, state, { steps: { error: true } })
    case ERROR_PROCESS:
      return Object.assign({}, state, { process: 'error' })
    case DIRTY_STEPS:
      return Object.assign({}, state, { steps: { [action.roleID]: 'dirty' } })
    case DIRTY_PROCESS:
      return Object.assign({}, state, { process: 'dirty' })
    default:
      return state
  }
}
