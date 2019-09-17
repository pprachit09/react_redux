const initState = {
  projects: [
    { title: 'Create react app', content: 'blah blah blah' },
    { title: 'Add Redux', content: 'blah blah blah' },
    { title: 'Deploy on Firebase', content: 'blah blah blah' }
  ]
}

const projectReducer = (state = initState, action) => {
  return state
}

export default projectReducer
