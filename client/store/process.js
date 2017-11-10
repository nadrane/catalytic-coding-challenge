import axios from 'axios'

const READ_PROCESS = 'READ_PROCESS'
const UPDATE_PROCESS = 'UPDATE_PROCESS'

const readProcess = proce => ({ type: READ_PROCESS, proce })
export const updateProcess = proce => ({ type: UPDATE_PROCESS, proce })

export const getProcess = () =>
  async (dispatch) => {
    try {
      const response = await axios.get('/api/process')
      dispatch(readProcess(response))
    } catch (error) {
      console.error(error)
    }
  }

export default (state = {}, action) => {
  switch (action.type) {
    case READ_PROCESS:
      return action.proce
    case UPDATE_PROCESS:
      return Object.assign(state, action.proce)
    default:
      return state
  }
}
