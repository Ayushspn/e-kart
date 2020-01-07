import React from 'react';
import './shopping-item.styles.scss'
import { connect } from 'react-redux';
import { addedItem, removedItem } from '../../redux/ShopList/ShopActionCreators';
const ShoppingListItem = ({ items, addItemToCart, cmpType, removeItem }) => {
    const { id, name, price, img_url, category, discount } = items;

    const addRemoveItem = (event) => {
        event.target.value > items.quantity ?
            addItemToCart(items, 'addItem') :
            addItemToCart(items, 'removeItem');


    }

    const removeItemFromCart= (item) => {
        removeItem(item)
    }


    return (
        <div className="card col-md-3 col-lg-3">
            <img src={img_url} alt='produc-image' style={{ width: '100%' }} />
            <div className="container">
                <h4><b>{name}</b></h4>
                <p>
                    <span>
                        <span>&#x20b9; {price} </span>
                    </span>
                    <span>
                        {discount} %
                    </span>
                </p>
                {
                    cmpType === 'shopItem' ? <button onClick={() => addItemToCart(items, 'addItem')}>Add To Cart</button> :
                        (
                            <div>
                                <input type='number' value={items.quantity} nim='0' onChange={(event) => addRemoveItem(event)} />
                                <button className='cart-button' onClick={() => removeItemFromCart(items)}><i className="fa fa fa-trash" aria-hidden="true"></i></button>
                            </div>
                        )
                }


            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (shopItem, parameter) => dispatch(addedItem(shopItem, parameter)),
        removeItem: (shopItem) => dispatch(removedItem(shopItem))
    }
}

export default connect(null, mapDispatchToProps)(ShoppingListItem);