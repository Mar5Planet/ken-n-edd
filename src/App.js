import React, { useState } from 'react';
import './App.css';
import ken from './images/ken.gif';
import edd from './images/edd.gif';
import kenBW from './images/kenBW.png';
import eddBW from './images/eddBW.png';
function App() {
  const [alive, setAlive] = useState(false);
  const [aliveK, setAliveK] = useState(false);
  return (
    <div className="homepage">
      <div className="home-imgs">
        <img onMouseEnter={() => setAlive(true)}  onMouseLeave={() => setAlive(false)} src={alive? edd : eddBW} alt= "edd" />
        <img onMouseEnter={() => setAliveK(true)}  onMouseLeave={() => setAliveK(false)} src={aliveK? ken : kenBW} alt="ken" />
      </div>
    </div>
  );
}

export default App;
