import React, {useState} from 'react';
import useSound from 'use-sound';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle, faPauseCircle} from '@fortawesome/free-solid-svg-icons';

import RihannonImg from '../images/Rhiannon.jpg'
import Barracuda from '../images/Barracuda.png'
import Saada from '../images/saada.jpg';
import Broadcast from '../images/Broadcast.jpg';

import RihannonAudio from '../audio/Rihannon.mp3';
import BarracudaAudio from '../audio/Barra.mp3';
import SaadaAudio from '../audio/Saada.mp3';
import BroadcastAudio from '../audio/Broadcast.mp3';

const Music = () => {
    const [playingR, setPlayingR] = useState(false);
    const [playingB, setPlayingB] = useState(false);
    const [playingS, setPlayingS] = useState(false);
    const [playingBr, setPlayingBr] = useState(false);
    const [song, setSong] = useState('');
    const [play, {stop}] = useSound(song);

    

    return(
        <div className="ken-music-container">
            <div className="song" onMouseDown={() => setSong(RihannonAudio)} 
            onClick={() => {

                playingR? stop() : play();
                setPlayingR(!playingR);
            }}>
                <img alt="rihannon" src={RihannonImg} />
                {playingR? <FontAwesomeIcon icon={faPauseCircle} /> :
                <FontAwesomeIcon icon={faPlayCircle} />}
            </div>
            <div className="song" onMouseDown={() => setSong(BarracudaAudio)} onClick={() => {
                playingB? stop() : play();
                setPlayingB(!playingB);
            }}>
                <img alt="barracuda" src={Barracuda} />
                {playingB? <FontAwesomeIcon icon={faPauseCircle} /> :
                <FontAwesomeIcon icon={faPlayCircle} />}
            </div>
            <div className="song" onMouseDown={() => setSong(SaadaAudio)} onClick={() => {
                playingS? stop() : play();
                setPlayingS(!playingS);
            }}>
                <img alt="your-touch-saada" src={Saada} />
                {playingS? <FontAwesomeIcon icon={faPauseCircle} /> :
                <FontAwesomeIcon icon={faPlayCircle} />}
            </div>
            <div className="song" onMouseDown={() => setSong(BroadcastAudio)} onClick={() => {
                playingBr? stop() : play();
                setPlayingBr(!playingBr);
            }}>
                <img alt="broadcast" src={Broadcast} />
                {playingBr? <FontAwesomeIcon icon={faPauseCircle} /> :
                <FontAwesomeIcon icon={faPlayCircle} />}
            </div>

        </div>
    )
}

export default Music;
