const GET_USER = 'GET_USER'
const SET_USER = 'SET_USER'

export const getUser = () => ({
  type: GET_USER,
})

export const setUser = (user) => ({
  user,
})

const initialState = {
  user: undefined,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { user } = action
      return { ...state, user }
    default:
      return state
  }
}

export default reducer
