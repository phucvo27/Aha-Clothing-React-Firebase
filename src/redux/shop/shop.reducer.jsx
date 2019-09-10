import ShopActionTypes from './shop.types';
import { collections } from './shop-data-dev';

const INITIAL_DATA = {
    collections
}

const shopReducers = (state = INITIAL_DATA, action)=>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {...state, collections: action.payload}
        default:
            return state
    }
}

export default shopReducers;