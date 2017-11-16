import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as users from '../users'
const mock = new MockAdapter(axios)

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const mockUser1 = {
  teamName: 'catalytic',
  username: 'andrew',
  userID: 'ffa6811a52cc',
  fullName: 'Andrew Thiermann',
  isTeamOwner: false,
  isTeamAdmin: false,
  isRestricted: false,
  isIntegration: false,
}

const mockUser2 = {
  teamName: 'catalytic',
  username: 'tom',
  userID: 'ffa3g81652cc',
  fullName: 'Thomas Yommerman',
  isTeamOwner: false,
  isTeamAdmin: false,
  isRestricted: false,
  isIntegration: false,
}

describe('users actions', () => {
  it('should create action with create user', () => {
    expect(users.createUser(mockUser1)).toEqual({
      type: users.CREATE_USER,
      user: mockUser1,
    })
  })
  it('should create action with readUsers', () => {
    expect(users.readUsers([mockUser1])).toEqual({
      type: users.READ_USERS,
      users: [mockUser1],
    })
  })
  it('should create action with updateUser', () => {
    expect(users.updateUser(mockUser1)).toEqual({
      type: users.UPDATE_USER,
      user: mockUser1,
    })
  })
  it('should create deleteUser', () => {
    expect(users.deleteUser(mockUser1.userID)).toEqual({
      type: users.DELETE_USER,
      userId: mockUser1.userID,
    })
  })
})

describe('users async actions', () => {
  let store = mockStore()

  afterEach(() => {
    mock.reset()
    store = mockStore()
  })

  it('creates READ_USERS when it finishes getUsers', async (done) => {
    mock.onGet('/api/users').reply(200, [mockUser1])
    const expectedActions = [
      { type: users.READ_USERS, users: [mockUser1] },
    ]
    await store.dispatch(users.getUsers())
    expect(store.getActions()).toEqual(expectedActions)
    done()
  })
})

describe('users reducer', () => {
  const defaultState = []

  it('should return the initial state', () => {
    expect(users.default(undefined, {})).toEqual(defaultState)
  })
  it('should handle CREATE_USER', () => {
    expect(users.default([mockUser2], {
      type: users.CREATE_USER,
      user: mockUser1,
    })).toEqual([mockUser2, mockUser1])
  })
  it('should handle READ_USERS', () => {
    expect(users.default(defaultState, {
      type: users.READ_USERS,
      users: [mockUser1, mockUser2],
    })).toEqual([mockUser1, mockUser2])
  })
  it('should handle UPDATE_USER', () => {
    const updatedUser1 = Object.assign(mockUser1, { fullName: 'simon asdf' })
    expect(users.default([mockUser1], {
      type: users.UPDATE_USER,
      user: updatedUser1,
    })).toEqual([updatedUser1])
  })
  it('should handle DELETE_USER', () => {
    expect(users.default([mockUser2], {
      type: users.DELETE_USER,
      userId: mockUser2.userID,
    })).toEqual([])
  })
})
