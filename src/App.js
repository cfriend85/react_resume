import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router} from '@reach/router';
import Main from './Views/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
      </Router>
    </div>
  );
}

export default App;
