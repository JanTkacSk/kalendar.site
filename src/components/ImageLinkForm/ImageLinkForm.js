import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{
    return (
        <div>
            <p className='f3'>
                {'This magic will detect faces in your pictures'}
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input type='text' className="f4 pa2 w-70" onChange={onInputChange} />
                    <button className='w-30 grow link ph3 pv2 dib white bg-light-purple'
                    onClick={onButtonSubmit}
                    >Detect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;