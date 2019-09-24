import { takeLatest, put, call } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shop.actions';
import ShopActionType from './shop.types';

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionType.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* fetchCollectionsAsync(){
    try{
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapShot);

        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(e){
        yield put(fetchCollectionsFailure(e.message))
    }
}