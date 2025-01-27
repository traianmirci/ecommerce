import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e  => {
        e.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = e => {
        const {value,name} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have a account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='Email'
                        required 
                    />
                    <FormInput
                        name="password"
                        type="password"
                        label="Password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                        <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;