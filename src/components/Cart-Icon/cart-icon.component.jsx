import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import CartDropdown from '../Cart-Dropdown/cart-dropdown.component';

import { connect } from 'react-redux';
import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { selectCartItemCount } from '../../redux/cart/cart.selector';

const CartIcon = ({toogleCartHidden, numberOfItems})=>{
    return (
        <div style={{position: 'relative'}}>
            <div className='cart-icon'  onClick={toogleCartHidden}>
                <ShoppingIcon className='shopping-icon' />
                <span className='item-count'>
                    {numberOfItems}
                </span>
            </div>
            <CartDropdown />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    numberOfItems: selectCartItemCount
})
const mapDispatchToProps = dispatch =>{
    return {
        toogleCartHidden: ()=> dispatch(toogleCartHidden())
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(CartIcon)