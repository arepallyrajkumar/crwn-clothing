import React from 'react';
import SingIn from '../../components/Sign-In/sign-in.component'
import SignUp from '../../components/Sign-up/sign-up.component';

import './sign-in-and-sign-up.style.scss';

const SignInSignUp = () => (

    <div className='sign-in-and-sign-up'>
        <SingIn />
        <SignUp />
    </div>
)

export default SignInSignUp;
