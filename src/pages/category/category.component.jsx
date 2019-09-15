import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';
import ProductList from '../../components/Products/ProductList.component';
import Navbar from '../../components/Navigation/navigation.component'

const CategoryPage = ({collection})=>{
    return (
        <React.Fragment>
            <Navbar />
            <ProductList {...collection} isAll={true} />
        </React.Fragment>
    )
}

const mapStateToProps = (state , ownProps)=>{
    return {
        collection : selectCollection(ownProps.match.params.collection)(state)
    }
}

export default connect(mapStateToProps)(CategoryPage);