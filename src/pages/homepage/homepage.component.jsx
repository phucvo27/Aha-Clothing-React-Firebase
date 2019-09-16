import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSelectionForPreview } from '../../redux/shop/shop.selector'
import Slider from '../../components/Slider/slider.component';
import ProductList from '../../components/Products/ProductList.component';


class Homepage extends React.Component{


    renderSectionHelper = ()=>{
        const { collections } = this.props;
        if(collections.length > 0){
            return collections.map((collection, index)=>{
                return (
                    <ProductList isAll={false} key={index} {...collection}/>
                )
            })
        }else{
            return <p>Loading...</p>
        }
    }

    render(){
        return (
            <React.Fragment>
                <Slider />
                {this.renderSectionHelper()}
            </React.Fragment>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    collections : selectSelectionForPreview
})

export default connect(mapStateToProps)(Homepage);