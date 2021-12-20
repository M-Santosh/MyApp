import React from 'react';
import Login from './Login_form/Login';
import Signup from './Login_form/Signup';
import Counter from './Feature/counter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
    <Signup/>
    </div>
    </Router>
  );
}

export default App;
