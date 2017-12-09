import history from '../history'

export const RESET_CONFIGURATIONS = 'RESET_CONFIGURATIONS'
export const TOGGLE_CONFIGURATION = 'TOGGLE_CONFIGURATION'

export const resetConfigurations = () => ({ type: RESET_CONFIGURATIONS })
export const toggleConfiguration = configID => ({ type: TOGGLE_CONFIGURATION, configID })
export const redirectAndReset = redirectURL =>
  (dispatch) => {
    history.push(redirectURL)
    dispatch(resetConfigurations())
  }

const initialState = [
  false,
  false,
  false,
  false,
  false,
]

export default (state = initialState, action) => {
  switch (action.type) {
    case RESET_CONFIGURATIONS:
      return initialState
    case TOGGLE_CONFIGURATION:
      return [...state.map((conf, index) => index === action.configID ? !conf : conf)]
      // just need return state.map((conf, index) => index === action.configID ? !conf : conf)
      // because map returns an array
    default:
      return state
  }
}
