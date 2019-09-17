const initState = {
  projects: [
    { title: 'Create react app', content: 'blah blah blah' },
    { title: 'Add Redux', content: 'blah blah blah' },
    { title: 'Deploy on Firebase', content: 'blah blah blah' }
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log(action.project)
      break
    default:
      console.log('default')
      break
  }
  return state
}

export default projectReducer
