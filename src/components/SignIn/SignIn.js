import React from 'react';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signInEmail: '',
            signInPassword: '',
        }
    }
    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSignInSubmit = () => {
        fetch('http://localhost:3000/signin',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(data =>{
            if (data.id) {
                this.props.loadUser(data);
                this.props.onRouteChange('Home');

            }
        })       
        
        
    }
    render() {
        return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-200 w-60-m w-55-l mw6 center tc shadow-5">
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <div className="f4 fw6 ph0 mh0"><h3>Sign In</h3></div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input 
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" 
                            name="email-address"  
                            id="email-address"
                            autoComplete="current-email"
                            onChange={this.onEmailChange} />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" 
                            name="password"  
                            id="password" 
                            autoComplete="current-password"
                            onChange={this.onPasswordChange}/>
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                        </fieldset>
                        <div className="">
                        <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="button" 
                        value="Sign in" 
                        onClick={this.onSignInSubmit}
                        />
                        </div>
                        <div className="lh-copy mt3">
                        <p className="f6 link dim black db pointer"  onClick={() => this.props.onRouteChange('SignUp')}>Sign up</p>
                        <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                        </div>
                    </form>
                </main>
            </article>
        );
    }
}

export default SignIn;