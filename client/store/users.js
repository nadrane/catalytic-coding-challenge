import axios from 'axios'

export const CREATE_USER = 'CREATE_USER'
export const READ_USERS = 'READ_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'

export const createUser = user => ({ type: CREATE_USER, user })
export const readUsers = users => ({ type: READ_USERS, users })
export const updateUser = user => ({ type: UPDATE_USER, user })
export const deleteUser = userId => ({ type: DELETE_USER, userId })

export const getUsers = () =>
  async (dispatch) => {
    try {
      const response = await axios.get('/api/users')
      dispatch(readUsers(response.data))
    } catch (error) {
      console.error(error)
    }
  }

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.user]
    case READ_USERS:
      return action.users
    case UPDATE_USER:
      return [
        ...state.filter(user => user.userId !== action.user.userId),
        action.user,
      ]
    case DELETE_USER:
      return [...state.filter(user => user.userID !== action.userId)]
    default:
      return state
  }
}
