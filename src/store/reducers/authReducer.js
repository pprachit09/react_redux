const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action) {
    case 'LOGIN_ERROR':
      console.log('Error')
      return {
        ...state,
        authError: 'Login Failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('Done')
      return {
        ...state,
        authError: null
      }
    default:
      return state
  }
}

export default authReducer
