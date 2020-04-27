import React from 'react';


const Navigation = (props) => {

    const {IsSignedIn} = props;

    if(IsSignedIn) {

        return (
            <nav style={{display: 'flex', justifyContent:'flex-end'}}>
                <p className='f3 link dim black underline pa3 pointer' onClick={() => props.onRouteChange('SignIn')}>Sign out</p>

            </nav>
        );

    }

        else{

            return (
                <nav style={{display: 'flex', justifyContent:'flex-end'}}>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => props.onRouteChange('SignUp')}>Sign up</p>
                    <p className='f3 link dim black underline pa3 pointer' onClick={() => props.onRouteChange('SignIn')}>Sign in</p>
                </nav>
            );
         }
    

    }

export default Navigation;