import ShopActionTypes from './shop.types';

const INITIAL_DATA = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducers = (state = INITIAL_DATA, action)=>{
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state, 
                isFetching: true
            }

        case ShopActionTypes.FETCH_COLLECTIONS_SUCCEESS:
            return {
                ...state, 
                collections: action.payload, 
                isFetching: false
            }
        case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
}

export default shopReducers;