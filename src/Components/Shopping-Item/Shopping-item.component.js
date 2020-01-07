import React from 'react';
import './shopping-item.styles.scss'
import {connect} from 'react-redux';
import {addedItem} from '../../redux/ShopList/ShopActionCreators';
const ShoppingListItem = ({items , addItemToCart, cmpType}) => {
    console.log(items);
    const { id, name, price, img_url, category, discount } = items;
    return (
        <div className="card">
            <img src={img_url} alt='produc-image' style ={{width:'100%'}}/>
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
                 cmpType === 'shopItem'? <button onClick = {() => addItemToCart(items)}>Add To Cart</button> : 
                 <input type ='number' value = {items.quantity} nim = '0' onChange = {() => addItemToCart(items)}/>
                }
                
                
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart : (shopItem) => dispatch(addedItem(shopItem))
    }
}

export default connect(null, mapDispatchToProps)(ShoppingListItem);