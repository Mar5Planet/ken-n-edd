import React, {useEffect, useState} from 'react';
import Load from '../images/load.gif';
import KenNav from './kenNav';
const KenHome = () => {
    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
        setTimeout(() => {
           setShowPage(true) 
        }, 3000);
    }, [])

    return (
        <div className="ken-main">
        {showPage? 
            <KenNav /> :
            <div className="ken-home">
                <div className="load-div">
                    <img className="load-1" src={Load} alt="load-screen" />
                </div>
            </div>

        }
        </div>
    )
}

export default KenHome;