import React from 'react';

const FaceRecognition = ({ImageUrl}) => {
    return (
        <div className="center">
            <div>
            <img alt='FaceArea' src={ImageUrl} width='500px' height='auto'/>
            </div>           
        </div>
    );

}

export default FaceRecognition;