import React from 'react';
import './shopping-item.styles.scss'
import { connect } from 'react-redux';
import { addedItem, removedItem } from '../../redux/ShopList/ShopActionCreators';


const ShoppingListItem = ({ items, addItemToCart, cmpType, removeItem, type }) => {
    const { id, name, price, img_url, category, discount } = items;
    const addRemoveItem = (event) => {
        event.target.value > items.quantity ?
            addItemToCart(items, 'addItem') :
            addItemToCart(items, 'removeItem');
    }

    const removeItemFromCart= (item) => {
        removeItem(item)
    }
    const classes = {card : 'card'}
    if(type === 'shoppingItem'){
       // classes.card = 'card';
        classes.cardImage = 'col-md-12 card-img';
        classes.cardContainer = 'container col-md-12 card-img';
        classes.cardDetailsContainer = '';
        classes.cart_item_quantity_txt_align = ''
        classes.cartbuttonchange = 'cart-button';
    }
    else {
        classes.card = 'card_change_width row'
        classes.cardImage = 'col-md-3';
        classes.cardContainer = 'container col-md-9 card-img';
        classes.cardDetailsContainer = 'card_change_txt_align';
        classes.cart_item_quantity_txt_align = 'cart_item_quantity_txt_align';
        classes.cartbuttonchange = 'cart-button_change cart-button'
    }
    return (
        <div className={classes.card}>
            <div className ={classes.cardImage}>
            <img src={img_url} alt='produc-image' style={{ width: '100%' }} />
            </div>
            <div className={classes.cardContainer}>
                <h4 className = 'cart-item-name'>{name}</h4>
                <div className={`cart-details-container ${classes.cardDetailsContainer}`} >
                    <span>
                        &#x20b9; {price}
                    </span>
                    <span className='add-padding'>
                        {price /100*discount} 
                    </span>
                    <span className='add-padding' style = {{'color' : 'green'}}>
                        <b>{discount} % Off</b>
                    </span>
                </div>
                {
                    cmpType === 'shopItem' ? <button className ='add-to-cart-btn' onClick={() => addItemToCart(items, 'addItem')}>Add To Cart</button> :
                        (
                            <div className = {`${classes.cart_item_quantity_txt_align}`}>
                                <input type='number' value={items.quantity} nim='0' onChange={(event) => addRemoveItem(event)} />
                                <button className= {classes.cartbuttonchange} onClick={() => removeItemFromCart(items)}>Remove Item</button>
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