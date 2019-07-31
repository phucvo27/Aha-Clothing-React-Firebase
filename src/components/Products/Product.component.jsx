import React from 'react';
import { withRouter } from 'react-router-dom';


const Product = ({item})=>{
    const { name, price , imageUrl} = item;
    return (
        <div className="product">
            <div className="product__img">q
                <img src={imageUrl} alt="" />
            </div>
            <div className="product__infor">
                <p className="product__infor--name effect-hover">{name}</p>
                <p className="product__infor--price">${price}</p>
            </div>
        </div>
    )
}


export default withRouter(Product);

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