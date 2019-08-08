import React from 'react';
import Navbar from '../../components/Navigation/navigation.component';
import Slider from '../../components/Slider/slider.component';
import ProductList from '../../components/Products/ProductList.component';
import { collections } from './shop-data-dev';

class Homepage extends React.Component{
    constructor(){
        super();
        this.state = {
            collections
    }
  }
    renderSectionHelper = ()=>{
        const { collections } = this.state;
        if(collections.length > 0){
            return collections.map((collection, index)=>{
                return (
                    <ProductList isAll={false} routeName={collection.routeName} items={collection.items} key={index} title={collection.title} />
                )
            })
        }else{
            return <p>Loading...</p>
        }
    }

    render(){
        return (
            <React.Fragment>
                <Navbar />
                <Slider />

                {this.renderSectionHelper()}
            </React.Fragment>
        )
    }
}


export default Homepage;