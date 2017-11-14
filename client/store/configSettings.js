const RESET_CONFIGURATIONS = 'RESET_CONFIGURATIONS'
const TOGGLE_CONFIGURATION = 'TOGGLE_CONFIGURATION'

export const resetConfigurations = () => ({ type: RESET_CONFIGURATIONS })
export const toggleConfiguration = configID => ({ type: TOGGLE_CONFIGURATION, configID })

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
    case toggleConfiguration:
      return [...state.map((conf, index) => index === action.configID ? !conf : conf)]
    default:
      return state
  }
}
