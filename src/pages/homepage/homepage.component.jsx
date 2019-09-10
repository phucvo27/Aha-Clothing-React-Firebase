import React from 'react';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector'
import Navbar from '../../components/Navigation/navigation.component';
import Slider from '../../components/Slider/slider.component';
import ProductList from '../../components/Products/ProductList.component';
import { firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

class Homepage extends React.Component{
    
    componentDidMount(){
        const collectionRef = firestore.collection('collections');

        // Get Snapshot
        collectionRef.onSnapshot(async snapShot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
            this.props.updateCollection(collectionsMap)
        })
    }
    renderSectionHelper = ()=>{
        const { collections } = this.props;
        if(collections){
            return Object.keys(collections).map((collection, index)=>{
                const { routeName, title, items } = collections[collection];
                return (
                    <ProductList isAll={false} routeName={routeName} items={items} key={index} title={title} />
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

const mapStateToProps = createStructuredSelector({
    collections : selectCollections
})

const mapDispatchToProps = dispatch => {
    return {
        updateCollection: collectionsMap => dispatch(updateCollections(collectionsMap))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Homepage);