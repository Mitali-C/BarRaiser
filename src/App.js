import './App.scss';
import React from 'react';
import {Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { Home } from './components/home/Home';

class App extends React.Component {
  render(){
    return (
      <Routes>
        <Route
          path='/'
          element={<Home></Home>}
        />
      </Routes>
    );
  }
}

export default connect()(App);
