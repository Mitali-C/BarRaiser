import { store } from "../../../index"

export const addProject = (data) => dispatch => {
  dispatch({
    type:'ADD_PROJECT',
    payload:data
  })
  if(!checkIfClientExists(data.client)){
    dispatch({
      type:'ADD_CLIENT',
      payload:data.client
    })
  }

}

const checkIfClientExists = (name) => {
  const state = store.getState();
  const clients = state.clients;
  for(let i=0;i<clients.length;i++){
    if(clients[i]===name){
      return true
    }
  }
  return false
}

export const startProjectTimer = (id)=>dispatch=>{
  const state = store.getState();
  const allProjects = state.projects;
  let project = getProjectById(id);
  project['isTimerActive'] = true;
  const final = findAndReplace(id, project, allProjects);
  dispatch({
    type:'EDIT_PROJECT',
    payload:final
  })
}

export const endProjectTimer = (id, time) => dispatch => {
  const state = store.getState();
  const allProjects = state.projects;
  let project = getProjectById(id);
  project['isTimerActive'] = false;
  project['time'] = time;
  const final = findAndReplace(id, project, allProjects);
  dispatch({
    type:'EDIT_PROJECT',
    payload:final
  })
  // dispatch({
  //   type:'EDIT_PROJECT',
  //   payload:allProjects
  // })
}

export const deleteproject = (id) => dispatch => {
  const state = store.getState();
  const allProjects = state.projects;
  let filtered = allProjects.filter(x=>x.id!==id)
  dispatch({
    type:'EDIT_PROJECT',
    payload:filtered
  })

}

const findAndReplace = (id, project, projects) => {
  let all = projects;
  for(let i=0;i<all.length;i++){
    if(all[i].id===id){
      all[i] = project
    }
  }
  return all;
}

const getProjectById = (id) => {
  const state = store.getState();
  const allProjects = state.projects;
  for(let i=0;i<allProjects.length;i++){
    if(allProjects[i].id===id){
      return allProjects[i]
    }
  }
}