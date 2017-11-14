import axios from 'axios'

const CREATE_STEP = 'CREATE_STEP'
const READ_STEPS = 'READ_STEPS'
const UPDATE_STEP = 'UPDATE_STEP'
const DELETE_STEP = 'DELETE_STEP'
const TOGGLE_USER_STEP = 'TOGGLE_USER_STEP'
const CLEAR_ALL_USER_STEP = 'CLEAR_ALL_USER_STEP'
const REORDER_STEP = 'REORDER_STEP'

export const createStep = step => ({ type: CREATE_STEP, step })
export const readSteps = steps => ({ type: READ_STEPS, steps })
export const updateStep = step => ({ type: UPDATE_STEP, step })
export const deleteStep = stepNumber => ({ type: DELETE_STEP, stepNumber })
export const toggleUserStep = (stepNumber, userID) => ({ type: TOGGLE_USER_STEP, userID, stepNumber })
export const clearAllUserStep = stepNumber => ({ type: CLEAR_ALL_USER_STEP, stepNumber })

export const getSteps = () =>
  async (dispatch) => {
    try {
      const response = await axios.get('/api/steps')
      dispatch(readSteps(response.data))
    } catch (error) {
      console.error(error)
    }
  }

const toggleStepLogic = (state, action) =>
  [...state.map((step) => {
    if (step.stepNumber === action.stepNumber) {
      if (step.role.users.includes(action.userID)) {
        return Object.assign(
          step,
          {
            role: {
              users: step.role.users.filter(userID => userID !== action.userID),
            },
          },
        )
      }
      return Object.assign(
        step,
        {
          role: {
            users: [...step.role.users, action.userID],
          },
        },
      )
    }
    return step
  })]


export default (state = [], action) => {
  switch (action.type) {
    case CREATE_STEP:
      return [...state, action.step]
    case READ_STEPS:
      return action.steps
    case UPDATE_STEP:
      return [
        ...state.filter(step => step.stepNumber !== action.step.stepNumber),
        action.step,
      ]
    case TOGGLE_USER_STEP:
      return toggleStepLogic(state, action)
    case DELETE_STEP:
      return [...state.filter(step => step.stepNumber !== action.stepNumber)]
    case CLEAR_ALL_USER_STEP:
      return [...state.map(step =>
        step.stepNumber === action.stepNumber ?
          Object.assign(
            step,
            {
              role: {
                users: [],
              },
            },
          ) :
          step,
      )]
    default:
      return state
  }
}
