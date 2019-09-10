import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import ProductList from '../../components/Products/ProductList.component';

const CategoryPage = ({collection})=>{
    return (
        <ProductList {...collection} isAll={true} />
    )
}

const mapStateToProps = (state , ownProps)=>{
    return {
        collection : selectCollection(ownProps.match.params.collection)(state)
    }
}

export default connect(mapStateToProps)(CategoryPage);