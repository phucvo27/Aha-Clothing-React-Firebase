import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import CartDropdown from '../Cart-Dropdown/cart-dropdown.component';

import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
const CartIcon = ({toogleCartHidden})=>{
    return (
        <div style={{position: 'relative'}}>
            <div className='cart-icon'  onClick={toogleCartHidden}>
                <ShoppingIcon className='shopping-icon' />
                <span className='item-count'>0</span>
            </div>
            <CartDropdown />
        </div>
    )
}


const mapDispatchToProps = dispatch =>{
    return {
        toogleCartHidden: ()=> dispatch(toogleCartHidden())
    }
}


export default connect(null , mapDispatchToProps)(CartIcon)