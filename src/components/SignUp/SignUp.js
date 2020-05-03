import React from 'react';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

                 id: '',
                name: '',
                email: '',
                password: '',
                entries:'',
                joined: ''

        }
    }

    onName = (event) => {
        this.setState({
            name: event.target.value 

        })
    }

    onEmail = (event) => {
        this.setState({
            email: event.target.value 

        })
        // console.log(this.state.user.email)
    }

    onPassword = (event) => {
        this.setState({
            password: event.target.value

        })
    }

    onSignUpSubmit = () => {
        fetch('http://localhost:3000/register',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {this.props.loadUser(data)})
            
        this.props.onRouteChange('Home')
    }


    render() {

        return (
            <article className="br2 ba dark-gray b--black-10 mv4 w-200 w-60-m w-55-l mw6 center tc shadow-5">
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <div className="f4 fw6 ph0 mh0"><h3>Sign Up</h3></div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="text" name="name"  
                            id="name-submit" 
                            onChange={this.onName}
                            />
                        </div>
    
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="email" name="-address"  
                            id="email-submit"
                            autoComplete = 'current-email'
                            onChange = {this.onEmail} />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                            type="password" name="password"  
                            id="password"
                            autoComplete = 'current-password'
                            onChange = {this.onPassword} />
                        </div>
                        <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                        </fieldset>
                        <div className="">
                        <input 
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="button" 
                        value="Sign Up" 
                        onClick={this.onSignUpSubmit}
                        />
                        </div>
                        <div className="lh-copy mt3">
                        </div>
                    </form>
                </main>
            </article>
        );
        
    }

}

export default SignUp;