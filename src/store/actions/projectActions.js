export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore()
    fireStore.collection('projects').add({
      ...project,
      authorFirstName: 'Prachit',
      authorLastName: 'Patil',
      authorID: 1234,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_PROJECT', project })
    }).catch(err => {
      console.log(err)
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    })
  }
}
