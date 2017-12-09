import axios from 'axios'

import {
  errorSteps,
} from '../store'

export const CREATE_STEP = 'CREATE_STEP'
export const READ_STEPS = 'READ_STEPS'
export const UPDATE_STEP = 'UPDATE_STEP'
export const DELETE_STEP = 'DELETE_STEP'
export const TOGGLE_USER_STEP = 'TOGGLE_USER_STEP'
export const CLEAR_ALL_USER_STEP = 'CLEAR_ALL_USER_STEP'

export const createStep = step => ({ type: CREATE_STEP, step })
export const readSteps = steps => ({ type: READ_STEPS, steps })
export const updateStep = step => ({ type: UPDATE_STEP, step })
export const deleteStep = roleID => ({ type: DELETE_STEP, roleID })
export const toggleUserStep = (roleID, userID) => ({ type: TOGGLE_USER_STEP, userID, roleID })
export const clearAllUserStep = roleID => ({ type: CLEAR_ALL_USER_STEP, roleID })

export const getSteps = () =>
  async (dispatch) => {
    try {
      const response = await axios.get('/api/steps')
      dispatch(readSteps(response.data))
    } catch (error) {
      dispatch(errorSteps())
    }
  }

const toggleStepLogic = (state, action) =>

  // This code would also benefit from something like immutablejs
  [...state.map((step) => {
    if (step.roleID === action.roleID) {
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
        ...state.filter(step => step.roleID !== action.step.roleID),
        action.step,
      ].sort((a, b) => a.stepNumber - b.stepNumber)
    case TOGGLE_USER_STEP:
      return toggleStepLogic(state, action)
    case DELETE_STEP:
      return [...state.filter(step => step.roleID !== action.roleID)]
    case CLEAR_ALL_USER_STEP:
      return [...state.map(step =>
        step.roleID === action.roleID ?
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
