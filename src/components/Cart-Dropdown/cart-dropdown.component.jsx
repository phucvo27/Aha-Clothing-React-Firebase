import React from 'react';
import { connect } from 'react-redux'
const CartDropdown = ({ isHidden})=>{
    return (
        <div className={`cart-dropdown ${!isHidden ? 'active': ''}`} onClick={()=>{console.log('clicked on dropdown')}}>
            <div className='cart-dropdown-items'></div>
            <button className='btn btn--white'>Go To Checkout</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isHidden : state.cart.hidden
    }
}


export default connect(mapStateToProps)(CartDropdown);