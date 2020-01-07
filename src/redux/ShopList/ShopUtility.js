
export const  apllyUtilityRange = (shopList, range) => {
    let filteredList = [];
    if(shopList && shopList.length >0 ){
        filteredList =  shopList.filter((shopItem) => {
            if(shopItem){
                return shopItem.price > range.min && shopItem.price < range.max;
            }
            
        } )
    }
    return filteredList;
}



export const  apllyUtilityAdditem = (cartItems, addItem) => {
    const copyCartItems = [...cartItems]
    const existingItem = copyCartItems.findIndex((shopListItem) => shopListItem.id === addItem.id )

    if(existingItem ===-1){
        addItem.quantity = 1;
        copyCartItems.push({...addItem})
    }
    else {
        const cartItemsObj = {...copyCartItems[existingItem]};
        cartItemsObj.quantity = cartItemsObj.quantity + 1;
        copyCartItems[existingItem] = cartItemsObj;
    }
    return copyCartItems
}


export const  apllyUtilityTotalItemCount = (addItem) => {
    let quantity = 0
    addItem.reduce((accumulatedItems, items) => {
        quantity = quantity + items.quantity;
    }, 0)

    return quantity;
}
