const initialState = [
    'Client 1',
    'Client 2',
    'Client 3',
  ];
  
  const clientsReducer = (state = initialState, action) => {
  
    let newState
    const data = action.payload
  
    switch (action.type) {
      case 'ADD_CLIENT':
        newState = [
            ...state, data
        ]
        console.log('new state:', newState)
        break
      case 'EDIT_CLIENT':
        newState = [...data]
        break
      default:
        newState = state
        break
    }
  
    return newState
  }
  
  export default clientsReducer