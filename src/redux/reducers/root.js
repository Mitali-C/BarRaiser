import { combineReducers } from 'redux';
import projectsReducer from './projects/projects';
import clientsReducer from './clients/clients';
import testReducer from './test/test';

const rootReducer = combineReducers({
    test:testReducer,
    projects: projectsReducer,
    clients:clientsReducer
})

export default rootReducer