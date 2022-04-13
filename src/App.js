import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <Router>
        <Routes>
          <Route
            path='/'
            element={<div>
              hello world
            </div>}
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
