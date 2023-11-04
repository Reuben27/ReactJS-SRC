import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddTask from './Components/AddTask';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <div className = "main">
            <Navbar/>
            <div className = "content">
              <Routes>
                <Route path = "*" element = {<PageNotFound/>} />
                <Route path = "/" element = {<Home/>} />
                <Route path = "/add-task" element = {<AddTask/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;