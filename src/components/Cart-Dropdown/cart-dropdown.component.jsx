import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../Cart-Item/cart-item.component';

const CartDropdown = ({ isHidden, cartItems})=>{
    return (
        <div className={`cart-dropdown ${!isHidden ? 'active': ''}`} onClick={()=>{console.log('clicked on dropdown')}}>
            <div className='cart-dropdown-items'>
                {
                    cartItems.length > 0 ? cartItems.map((item, idx) => (<CartItem item={item} key={idx}/>)) : (<p>No Item</p>)
                }
            </div>
            <button className='btn btn--white'>Go To Checkout</button>
        </div>
    )
}

const mapStateToProps = ({cart: {hidden, cartItems}}) => {
    return {
        isHidden : hidden,
        cartItems
    }
}


export default connect(mapStateToProps)(CartDropdown);