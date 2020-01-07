import React from 'react';
import { connect } from 'react-redux';
import './Checkout.styles.scss';
import ShoppingListItem from '../../Components/Shopping-Item/Shopping-item.component';
import CartDetails from '../../Components/Cart-details/cart-details.component'

const CheckOutPage = ({ cartItems, cartItemCount }) => {

    return (
        <div className='row chnge-width'>
            <div className='col-lg-9 col-md-9 col-sm-12 col-xs-12' style={{'max-width' : '57rem', 'margin': 'auto'}}>
                <div className='row'>
                    {cartItems && cartItems.length > 0 ? cartItems.map((cartItem) => (<ShoppingListItem id={cartItem.id} items={cartItem}></ShoppingListItem>))
                        : <div>Please add Item to Cart</div>
                    }
                </div>
            </div>
            
                   {cartItems && cartItems.length> 0 ? (<CartDetails></CartDetails>) : null } 
           

        </div>

    )
}

const mapsStateToPrps = ({ shop: { cartItems, cartItemCount } }) => {
    return {
        cartItems,
        cartItemCount: cartItemCount

    }
}

export default connect(mapsStateToPrps)(CheckOutPage);