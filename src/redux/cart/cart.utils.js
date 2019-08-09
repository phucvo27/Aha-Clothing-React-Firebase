export const addItemToCart = (cartItems, cartItemToAdd)=>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

    if(existingCartItem){
        return cartItems.map(cartItem => 
                                cartItem.id === cartItemToAdd.id 
                                    ? {...cartItem, quantity: cartItem.quantity + 1}
                                    : cartItem
                                    )
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}]

}


export const removeItemCart = (cartItems, cartItemToRemove)=>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);
    
    if(existingCartItem){
        return cartItems.filter(item => item.id !== cartItemToRemove.id)
    }
}


export const decreseQuantity = (cartItems, cartItemToDecrese)=>{
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToDecrese.id);
    
    if(existingCartItem.quantity > 1){
        return cartItems.map(item => item.id === cartItemToDecrese.id ? {...item, quantity: cartItemToDecrese.quantity - 1} : item)
    }else if( existingCartItem.quantity === 1){
        return cartItems.filter(item => item.id !== cartItemToDecrese.id)
    }
}