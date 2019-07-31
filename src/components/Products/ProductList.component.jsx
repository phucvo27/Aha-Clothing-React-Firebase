import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product.component';


const ProductList = ({items , title})=>{
    return (
        <section className="section__product">
            <h1 className="heading-primary u-text-center mg-bottom-large">
                <Link className='effect-hover' to={`/${title}`}>{title}</Link>
            </h1>
            <div className="products">
                {
                    items.length > 0 && items.map((item, index) => <Product key={index} item={item} />)
                }
            </div>
        </section>
    )
}

export default ProductList;