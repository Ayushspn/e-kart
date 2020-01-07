import * as actionTypes from './ShopList.action.types'
import * as apiURL from '../../APIURL';

const ShopListSuccess = shopList => ({
    type: actionTypes.FETCH_CART_LIST,
    payload: shopList
  });

export const fetchShopList = () => {
    return dispatch => {
        fetch(apiURL.fetchCartItemsURL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch(ShopListSuccess(data));
        }
        )
        .catch(error => console.log(error));
  };
}

export const ApplyFilter = (filterRange) => ({
  type: actionTypes.APPLY_RANGE,
  payload: filterRange
})

export const addedItem = (cartItem) => ({
  type: actionTypes.ADD_ITEM,
  payload: cartItem
})
