import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addItem } from '../../redux/cart/cart.actions'

const Product = ({item, addItem})=>{
    const { name, price , imageUrl} = item;
    return (
        <div className="product">
            <div className="product__img">
                <img src={imageUrl} alt="" />
                <button onClick={()=> addItem(item)} className="btn btn--white add-to-cart">Add to Cart</button>
            </div>
            <div className="product__infor">
                <p className="product__infor--name effect-hover">{name}</p>
                <p className="product__infor--price">${price}</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItem : item => dispatch(addItem(item))
    }
}


export default withRouter(connect(null , mapDispatchToProps)(Product));

/*
====== Sale ====

<div className="product">
    <div className="product__img">
        <img src="img/product-3.jpg" alt="" />
        <div className="on__sale">
            <p>Sale</p>
        </div>
    </div>
    <div className="product__infor">
        <p className="product__infor--name">JACKET AND DRESS</p>
        <p className="product__infor--price">
            <span className="old-price">$150.0</span>
            <span className="sale-price">$119.0</span>
        </p>
    </div>
</div>


======= Out of Stock =========

<div className="product">
    <div className="product__img">
        <img src={imageUrl} alt="" />
        <div className="out__stock">
            <p>Out Of Stock</p>
        </div>
    </div>
    <div className="product__infor">
        <p className="product__infor--name">{name}</p>
        <p className="product__infor--price">${price}</p>
    </div>
</div>

*/