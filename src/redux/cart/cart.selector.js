import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accum, nextItem ) => accum += nextItem.quantity , 0)
)

export const selectCartItemTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accum, nextItem) => accum += nextItem.quantity * nextItem.price , 0)
)