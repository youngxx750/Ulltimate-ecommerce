import React from 'react';


import Button from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }
    

    // Function to handle the form submit
    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: ''});
        }catch(error) {
                console.log(error);
        }
    }
    // Function to handle the input values being passed
    handleChange = event => {
        const { value, name} = event.target;


        this.setState({ [name]: value})
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an Account</h2>
                <span>Sign in with your email and password</span>


                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" 
                           name="email"
                           value={this.state.email} 
                           handleChange={this.handleChange}
                           label="email"
                           required
                           />
             

                    <FormInput type="password" 
                           name="password"
                           value={this.state.password}
                           handleChange={this.handleChange}
                           label="password"
                           required
                           />
             
                    <div className="buttons">
                        <Button type="submit">Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>
                        Sign In using Google</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;






