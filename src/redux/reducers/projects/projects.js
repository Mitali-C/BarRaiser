const initialState = [
  {projectName:'Project 1', client:'Client 1', time:0, id:"1", isTimerActive:false},
  {projectName:'Project 2', client:'Client 2', time:0, id:"2", isTimerActive:false},
  {projectName:'Project 3', client:'Client 3', time:0, id:"3", isTimerActive:false},
];

const projectsReducer = (state = initialState, action) => {

  let newState
  const data = action.payload

  switch (action.type) {
    case 'ADD_PROJECT':
      newState = [
          ...state, data
      ]
      console.log('new state:', newState)
      break
    case 'EDIT_PROJECT':
      newState = [...data]
      break
    default:
      newState = state
      break
  }

  return newState
}

export default projectsReducer