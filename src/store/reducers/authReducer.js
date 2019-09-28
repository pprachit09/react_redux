const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
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
    case 'SIGNOUT_SUCCESS':
      console.log('Signout')
      return state
    case 'SIGNUP_SUCCESS':
      console.log('Done')
      return {
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('err')
      return {
        ...state,
        authError: action.err.message
      }
    default:
      return state
  }
}

export default authReducer
