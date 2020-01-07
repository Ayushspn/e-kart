import React from 'react';
import './Price-Sort.styles.scss';
import {connect} from 'react-redux';
import {sortItems} from '../../../redux/ShopList/ShopActionCreators';


const PriceSort = ({sortShopItems}) => {
    return (
        <div>
            <button onClick = {() => sortShopItems('HIGH_TO_LOW')}> SORT BY PRICE HIGH TO LOW</button>
            <button onClick = {() => sortShopItems('LOW_TO_HIGH')}> SORT BY PRICE LOW TO HIGH</button>
            <button onClick = {() => sortShopItems('SORT_BY_DISCOUNT')}> SORT BY DISCOUNT</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        sortShopItems : (parameter) => dispatch(sortItems(parameter))
    }
}

export default connect(null, mapDispatchToProps)(PriceSort);