import React from 'react';
import FormInput from '../FormInput/form-input.component'
import {auth,  signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/custom-button.component';

class SignIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e)=>{
        const { name, value } = e.target;

        this.setState(()=>({[name]: value}));
    }

    handleSubmit = async (e)=>{
        e.preventDefault();
        const { email , password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState(()=>({email: '', password: ''}))
        }catch(e){
            console.log('Can not sign in', e);
        }
        
    }

    render(){
        return (
            <div className='auth'>
                <h3 className='auth__title'>I already have an account</h3>
                <p className='auth__subtitle'>Sign in with your email and password</p>

                <form className='auth__form' onSubmit={this.handleSubmit}>
                    
                    <FormInput
                        handleChange={this.handleChange}
                        name='email' 
                        label='Email'
                        value={this.state.email} 
                        type='email' 
                        id='email' 
                        required  
                    />
                    
                    <FormInput
                        handleChange={this.handleChange}
                        name='password' 
                        label='Password'
                        value={this.state.password} 
                        type='password' 
                        id='password' 
                        required  
                    />

                    <div className="button-groups">
                        <CustomButton
                            type='submit'
                            >
                                Sign In
                        </CustomButton>
                        <CustomButton
                            isGoogleSignIn={true}
                            onClick={signInWithGoogle}>
                                Sign In With Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;

/*
<input type='email' id='email' name='email' value={this.state.email} required  onChange={this.handleChange} />
                    <label for='email'>Email</label>

<input type='password' id='password' name='password' value={this.state.password} required onChange={this.handleChange}  />
                    <label for='password'>Password</label>
*/