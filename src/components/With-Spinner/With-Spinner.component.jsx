import React from 'react';

const WithSpinner = (WrappedComponent)=>({isLoading , ...otherProps})=>{
    return isLoading 
            ? 
            (
                <div className='spinner__box'>
                    <div className='spinner'></div>
                </div>
            ) : 
            (<WrappedComponent {...otherProps} /> )
}


export default WithSpinner;