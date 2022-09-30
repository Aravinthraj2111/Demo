import React from 'react';
import './App.css';
import Login from './Login';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <h1>Login</h1>
     <Login/>
    </div>
  );
}
export default App;
