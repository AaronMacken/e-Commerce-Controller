import React from 'react';
import Navbar from '../components/Navbar';
import Main from './Main';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Main />
      </div>
    </Router>

  );
}

export default App;
