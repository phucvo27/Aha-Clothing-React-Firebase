import React from 'react';


const CartItem = ({item: { name, quantity, price, imageUrl}})=>{
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item"/>
            <div className="item-details">
                <p className='item-details-name'>{name}</p>
                <p className='item-details-price'> 
                    <strong>{quantity} x </strong> ${price}
                </p>
            </div>
        </div>
    )
}

export default CartItem;

/*
<span>{quantity}</span>
                    <span style={{margin: '0 1rem'}}>x</span>
                    <span>${price}</span>

*/