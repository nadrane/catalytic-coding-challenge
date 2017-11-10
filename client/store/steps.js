const CREATE_STEP = 'CREATE_STEP'
const READ_STEPS = 'READ_STEPS'
const UPDATE_STEP = 'UPDATE_STEP'
const DELETE_STEP = 'DELETE_STEP'
const REORDER_STEP = 'REORDER_STEP'

export const createStep = step => ({ type: CREATE_STEP, step })
export const readSteps = steps => ({ type: READ_STEPS, steps })
export const updateStep = step => ({ type: UPDATE_STEP, step })
export const deleteStep = stepId => ({ type: DELETE_STEP, stepId })

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
    case DELETE_STEP:
      return [...state.filter(step => step.stepNumber !== action.stepId)]
    default:
      return state
  }
}
