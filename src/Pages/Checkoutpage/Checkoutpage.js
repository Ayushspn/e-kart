import React from 'react';
import {connect} from 'react-redux';
import ShoppingListItem from '../../Components/Shopping-Item/Shopping-item.component'

const CheckOutPage = ({cartItems, cartItemCount}) => {
    
    return (
        
        <div>
            {cartItems  && cartItems.length > 0  ?  cartItems.map((cartItem) => (<ShoppingListItem id = {cartItem.id} items = {cartItem}></ShoppingListItem>))
            : <div>Please add Item to Cart</div>
            }
        </div>
    )
}

const mapsStateToPrps = ({shop : {cartItems, cartItemCount}}) => {
    return{
        cartItems, 
        cartItemCount : cartItemCount

    }
}

export default connect(mapsStateToPrps)(CheckOutPage);