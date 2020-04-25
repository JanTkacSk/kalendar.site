import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'


const Logo = () => {
    return (
        <div className='ma4 mt0' >
        
        <Tilt className="Tilt br2 shadow-2 tc" options={{ max : 50 }} style={{ height: 150, width: 150, paddingTop: '25px' }} >
            <div className="Tilt-inner"> <img src={brain} alt="brain" /> </div>
        </Tilt>

        </div>
    );
}

export default Logo;