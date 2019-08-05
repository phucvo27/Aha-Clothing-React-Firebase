import React from 'react';
import FormInput from '../FormInput/form-input.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton/custom-button.component';

class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = (e)=>{
        const { name, value } = e.target;

        this.setState(()=>({[name]: value}));
    }

    handleSubmit = async (e)=>{
        e.preventDefault();
        const { displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword){
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            // clear form data
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(e){
            console.log('Can not create new user', e);
        }
    }

    render(){
        const { displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='auth'>
                <h3 className='auth__title'>I do not have an account</h3>
                <p className='auth__subtitle'>Sign up with your email and password</p>

                <form className='auth__form' onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name='displayName' 
                        label='Display Name'
                        value={displayName} 
                        type='text' 
                        id='displayName' 
                        required  
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name='email' 
                        label='Email'
                        value={email} 
                        type='email' 
                        id='email' 
                        required  
                    />
                    
                    <FormInput
                        handleChange={this.handleChange}
                        name='password' 
                        label='Password'
                        value={password} 
                        type='password' 
                        id='password' 
                        required  
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name='confirmPassword' 
                        label='Confirm Password'
                        value={confirmPassword} 
                        type='password' 
                        id='confirmPassword' 
                        required  
                    />

                    <div className="button-groups">
                        <CustomButton type='submit'>Sign Up</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignUp;