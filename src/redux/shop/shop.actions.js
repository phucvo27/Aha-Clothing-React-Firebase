import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () =>{
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START
    }
}

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCEESS, 
    payload: collectionsMap
})

export const fetchCollectionsFailure = message => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: message
})

export const fetchCollectionsStartAsync = ()=>{

    return (dispatch) => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())
        // Get Snapshot
        collectionRef
            .get()
            .then(async snapShot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapShot);
                dispatch(fetchCollectionsSuccess(collectionsMap))
            })
            .catch(e => {
                dispatch(fetchCollectionsFailure(e.message))
            })
    }
}