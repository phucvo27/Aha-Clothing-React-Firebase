import React from 'react';
import SignIn from '../../components/SignIn/sign-in.component'
import SignUp from '../../components/SignUp/sign-up.component';
const SignInAndSignUp = ()=>{
    return (
        <section className="authenticate">
            <SignIn />
            <SignUp />
        </section>
    )
};


export default SignInAndSignUp;