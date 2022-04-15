import { store } from "../../../index"

export const addClient = (data) => dispatch => {
  dispatch({
    type:'ADD_CLIENT',
    payload:data
  })
}

export const deleteclient = (name) => dispatch => {
  const state = store.getState();
  const clients = state.clients;
  let filtered = clients.filter(x=>x!==name)
  dispatch({
    type:'EDIT_CLIENT',
    payload:filtered
  })

}
