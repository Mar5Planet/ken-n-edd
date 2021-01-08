import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMusic, faFile, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import Music from './Music';

const KenNav = () => {
    return (
        <>
            <nav>
                <a href="#first"><FontAwesomeIcon className="fa-icon" icon={faUser} /></a>
                <a href="#second"><FontAwesomeIcon className="fa-icon" icon={faMusic}/></a>
                <a href="#third"><FontAwesomeIcon className="fa-icon" icon={faFile} /></a>
                <a href="#fourth"><FontAwesomeIcon className="fa-icon" icon={faPuzzlePiece}/></a>
            </nav>
            <div class= 'container'> 
                    <div className="ken-1">
                        
                    </div>
                
                <section id= 'first'>
                    <div className="ken-about">
                        <h1>OXA</h1>
                        <p>Some societies regard a witch as a person with inherent supernatural powers, but in the West witchcraft has been more commonly believed to be an ordinary person's free choice to learn and practice magic with the help of the supernatural.</p>
                    </div>
                </section>
                
                <section id= 'second'>
                    <Music />
                </section>
                
                <section id= 'third'>
                <h1>Third</h1>
                </section>
                
                <section id= 'fourth'>
                <h1>Fourth</h1>
                </section>
            </div>
        </>
    )
}

export default KenNav;