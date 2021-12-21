import React from 'react';
import Counter from './Feature/counter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
    {/* <Signup/> */}
    <Counter/>
    </div>
    </Router>
  );
}

export default App;
