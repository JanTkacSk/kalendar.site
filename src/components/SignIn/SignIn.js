import React from 'react';

const SignIn = function(props) {
    return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-200 w-60-m w-55-l mw6 center tc shadow-5">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <div className="f4 fw6 ph0 mh0"><h3>Sign In</h3></div>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                    </div>
                    <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                    </fieldset>
                    <div className="">
                    <input 
                    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                    type="submit" 
                    value="Sign in" 
                    onClick={() => props.onRouteChange('Home')}
                    />
                    </div>
                    <div className="lh-copy mt3">
                    <a href="#0" className="f6 link dim black db">Sign up</a>
                    <a href="#0" className="f6 link dim black db">htmlForgot your password?</a>
                    </div>
                </form>
            </main>
        </article>
    );
}

export default SignIn;