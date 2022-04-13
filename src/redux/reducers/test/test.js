const initialState = "";

const testReducer = (state = initialState, action) => {

  let newState
  const data = action

  switch (action.type) {
    case 'ADD_DATA':
      newState = data
      break
    case 'EDIT_DATA':
      newState = data
      break
    default:
      newState = state
      break
  }

  return newState
}

export default testReducer