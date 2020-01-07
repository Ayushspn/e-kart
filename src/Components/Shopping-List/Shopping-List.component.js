import React from 'react';
import { connect } from 'react-redux';
import ShoppingListItem from '../Shopping-Item/Shopping-item.component';
import './shopping-List.styles.scss';

const ShoppingList = ({ ShopItemList }) => {
    return (
        <div className ='row'>
        {ShopItemList  &&  ShopItemList.length > 0 ?  ShopItemList.map((items) => {
            return (
                <ShoppingListItem key={items.id} items = {items} 
                cmpType = 'shopItem'
                />
            )
        })
        : <div> No Record Found</div>}
        </div>
    )
}

const mapStateToProps = ({ shop: { ShopItemList } }) => {
    return {
        ShopItemList
    }
}

export default connect(mapStateToProps)(ShoppingList);