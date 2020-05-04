import React from 'react';

const Rank = (props) =>{
    const name = props.name
    return (
        <div>
            <div className="white f3">
                {`Hello ${name}, your current entry count is `}
            </div>
            <div className='white f1' >
                {`${props.entries}`}
            </div>
            
        </div>
    );
}

export default Rank;