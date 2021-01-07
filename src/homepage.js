import React, {useState} from 'react';
import ken from './images/ken.gif';
import edd from './images/edd.gif';
import kenBW from './images/kenBW.png';
import eddBW from './images/eddBW.png';
import { Link } from 'react-router-dom';

function Homepage() {
  const [alive, setAlive] = useState(false);
  const [aliveK, setAliveK] = useState(false);
  return (
    <div className="homepage">
      <div className="home-imgs">
        <Link to="/edd">
            <img onMouseEnter={() => setAlive(true)}  onMouseLeave={() => setAlive(false)} src={alive? edd : eddBW} alt= "edd" />
        </Link>
        <Link to="/ken">
            <img onMouseEnter={() => setAliveK(true)}  onMouseLeave={() => setAliveK(false)} src={aliveK? ken : kenBW} alt="ken" />
        </Link>     
      </div>
    </div>
  );
}

export default Homepage;