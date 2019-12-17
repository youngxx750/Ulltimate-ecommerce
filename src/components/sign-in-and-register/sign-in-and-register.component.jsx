import React from 'react';

import SignIn from './sign-in.component';
import SignUp from '../sign-up/sign-up.component';

import './sign-in-and-register.style.scss';

const SignInAndRegisterPage = () => (
    <div className="sign-in-and-register">
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndRegisterPage;