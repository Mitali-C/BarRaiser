import { combineReducers } from 'redux';
import testReducer from './test/test';

const rootReducer = combineReducers({
    test:testReducer
})

export default rootReducer