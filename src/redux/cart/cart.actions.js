import { CartActionTypes } from './cart.types';

export const toogleCartHidden = ()=>{
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
}

export const addItem = item => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    }
}

export const removeItem = item => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: item
    }
}

export const decreseItem = item => {
    return {
        type: CartActionTypes.DECRESE_QUANTIY,
        payload: item
    }
}