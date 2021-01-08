import React, { useState, useEffect} from 'react';
import Load4 from '../images/load4.gif';


const EddHome = () => {
    const [showPage, setShowPage] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //        setShowPage(true) 
    //     }, 3000);
    // }, [])

    return (
        <div className="ken-main">
        {showPage? 
            null :
            <div className="edd-home">
                <div className="load-div">
                    <img className="load-1" src={Load4} alt="load-screen" />
                </div>
            </div>

        }
        </div>
    )
}

export default EddHome;