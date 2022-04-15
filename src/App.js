import './App.scss';
import React from 'react';
import {Routes, Route } from "react-router-dom";
import { connect } from 'react-redux';
import Home from './components/home/Home';
import { SideBar } from './components/SideBar/SideBar';
import { Clients } from './components/clients/Clients';

class App extends React.Component {
  render(){
    return (
      <div id="app">
      <SideBar></SideBar>
      <Routes>
        <Route
          path='/clients'
          element={
            <Clients></Clients>
          }
        ></Route>
        <Route
          path='/' exact
          element={<Home></Home>}
        />
      </Routes>
      </div>
    );
  }
}

export default connect()(App);
