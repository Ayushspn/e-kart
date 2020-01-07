import * as actionTypes from './ShopList.action.types'
import { apllyUtilityRange, apllyUtilityAdditem, apllyUtilityTotalItemCount, removeItem } from './ShopUtility';
const INITIALSTATE = {
    ShopItemList: [],
    copyShopItemList: [],
    cartItems: [], 
    cartItemCount : 0
}

const shopReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CART_LIST:
            return {
                ...state,
                ShopItemList: action.payload,
                copyShopItemList: action.payload
            }

        case actionTypes.APPLY_RANGE:
            const copyDataFilter = [...state.copyShopItemList]
            const rangeBasedFilter = apllyUtilityRange(copyDataFilter, action.payload);
            return {
                ...state,
                ShopItemList: rangeBasedFilter
            }

        case actionTypes.ADD_ITEM:
            let countItems = 0;
            const addItemToCart = apllyUtilityAdditem(state.cartItems, action.value.cartItem, action.value.parameter);
            if(addItemToCart && addItemToCart.length > 0){
                countItems =  apllyUtilityTotalItemCount(addItemToCart);
            }
            return {
                ...state,
                cartItems : addItemToCart, 
                cartItemCount : countItems
            }

            case actionTypes.REMOVE_ITEM:
                let countRemoveItems = 0;
                const removedItems = removeItem(state.cartItems, action.payload);
                if(removedItems && removedItems.length > 0){
                    countRemoveItems =  apllyUtilityTotalItemCount(removedItems);
                }
                return {
                    ...state,
                    cartItems : removedItems, 
                    cartItemCount : countRemoveItems
                }
    

        default:
            return state
    }

}

export default shopReducer;