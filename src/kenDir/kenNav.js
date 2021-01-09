import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMusic, faHandSparkles, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import Music from './Music';
import Deck from './Deck';
import Matching from './Matching';
const KenNav = () => {
    return (
        <>
            <nav>
                <a href="#first"><FontAwesomeIcon className="fa-icon" icon={faUser} /></a>
                <a href="#second"><FontAwesomeIcon className="fa-icon" icon={faMusic}/></a>
                <a href="#third"><FontAwesomeIcon className="fa-icon" icon={faHandSparkles} /></a>
                <a href="#fourth"><FontAwesomeIcon className="fa-icon" icon={faPuzzlePiece}/></a>
            </nav>
            <div className= 'container'> 
                    <div className="ken-1">
                        
                    </div>
                
                <section id= 'first'>
                    <div className="ken-about">
                        <h1>OXA</h1>
                        <p>“A witch is a woman who emerges from deep within herself. She is a woman who has honestly explored her light and learned to celebrate her darkness. She is a woman who is able to fall in love with the magnificent possibilities of her power. She is a woman who radiates mystery. She is magnetic. She is a witch.”</p>
                    </div>
                </section>
                
                <section id= 'second'>
                    <Music />
                </section>
                
                <section id= 'third'>
                    <div className="tarot-container">
                        <div className="tarot-cards">
                            <Deck />
                        </div>
                    </div>
                </section>
                
                <section id= 'fourth'>
                <Matching />
                </section>
            </div>
        </>
    )
}

export default KenNav;