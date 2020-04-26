import React from 'react';
import './FaceRecognition.css'
const FaceRecognition = ({ImageUrl, Box}) => {
    return (
        <div className="center ma">
            <div className="center absolute mt2">
            <img  className='center' id="inputimage" alt='FaceArea' src={ImageUrl} width='500px' height='auto'/>
            <div className = "bounding-box" style={{top: Box.topRow, right: Box.rightCol, bottom: Box.bottomRow, left: Box.leftCol}}></div>
            </div>           
        </div>
    );

}

export default FaceRecognition;