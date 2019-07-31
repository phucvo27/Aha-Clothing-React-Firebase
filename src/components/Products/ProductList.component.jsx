import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product.component';


const ProductList = ({items , title, isAll})=>{
    return (
        <section className="section__product">
            <h1 className="heading-primary u-text-center mg-bottom-large">
                <Link className='effect-hover' to={`/${title.toLowerCase()}`}>{title}</Link>
            </h1>
            <div className="products">
                {
                    isAll 
                        ? items.map((item, index) => <Product key={index} item={item} />)
                        : items.filter((item, idx) => idx < 4).map((item, index) => <Product key={index} item={item} />)
                }
            </div>
        </section>
    )
}

export default ProductList;