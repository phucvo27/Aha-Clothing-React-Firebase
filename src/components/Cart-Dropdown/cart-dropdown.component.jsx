import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartItem from '../Cart-Item/cart-item.component';
import { selectCartItems, selectCartHidden } from '../../redux/cart/cart.selector';
import { toogleCartHidden } from '../../redux/cart/cart.actions'
const CartDropdown = ({ isHidden, cartItems, history, dispatch})=>{
    return (
        <div className={`cart-dropdown ${!isHidden ? 'active': ''}`} onClick={()=>{console.log('clicked on dropdown')}}>
            <div className='cart-dropdown-items'>
                {
                    cartItems.length > 0 ? cartItems.map((item, idx) => (<CartItem item={item} key={idx}/>)) : (<p>No Item</p>)
                }
            </div>
            <button onClick={()=> {
                dispatch(toogleCartHidden())
                history.push('/checkout')}} 
                className='btn btn--white'>Go To Checkout</button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isHidden : selectCartHidden,
    cartItems: selectCartItems
})


export default withRouter(connect(mapStateToProps)(CartDropdown));