export const addData = (data) => dispatch => {
    dispatch({
     type: 'ADD_DATA',
     payload: data
    })
}