export const signIn = (credentials) => {
  console.log(credentials)
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then((res) => {
      console.log(res)
      dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'LOGIN_ERROR', err })
    })
  }
}
