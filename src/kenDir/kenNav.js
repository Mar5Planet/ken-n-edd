import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faMusic, faFile, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons'

const KenNav = () => {
    return (
        <>
            <nav>
                <a href="#first"><FontAwesomeIcon icon={faUser} /></a>
                <a href="#second"><FontAwesomeIcon icon={faMusic}/></a>
                <a href="#third"><FontAwesomeIcon icon={faFile} /></a>
                <a href="#fourth"><FontAwesomeIcon icon={faPuzzlePiece}/></a>
            </nav>
            
            <div class= 'container'> 
                <section id= 'first'>
                    <div className="ken-1">
                    </div>
                </section>
                
                <section id= 'second'>
                    <h1>Second</h1>
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