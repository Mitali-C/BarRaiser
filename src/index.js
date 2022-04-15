import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux";
import rootReducer from './redux/reducers/root'
import { compose } from 'redux';
import './index.css';
import App from './App';
import thunk from 'redux-thunk'
import { BrowserRouter as  Router } from 'react-router-dom';

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
 <Provider store={store}>
   <Router>
    <App />
   </Router>
 </Provider>,
 document.getElementById('root')
);