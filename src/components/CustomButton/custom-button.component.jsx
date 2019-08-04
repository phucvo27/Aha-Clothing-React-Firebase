import React from 'react';


const CustomButton = ({ children, isGoogleSignIn = false, ...otherProps})=>{
    return (
        <button className={`btn btn--submit ${isGoogleSignIn ? 'sign-in-google': ''}`} {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton;