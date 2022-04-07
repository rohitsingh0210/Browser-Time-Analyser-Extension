import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Graph from './Components/Graph';
import AllSites from './Components/AllSites';

function App() {
  const [showGraph, setShowGraph] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        Browsing Time Analyser
      </header>
      <div id='graph'>
         { showGraph ? <Graph /> : <AllSites />}
      </div>
      <footer>
        <button className='bruh-button' onClick={() => setShowGraph((prevState)=>(!prevState))}>{showGraph?"Manage Sites":"Back"}</button>
      </footer>

    </div>
  );
}

export default App;
