import React, {useState} from 'react';
import './Price-Sort.styles.scss';
import {connect} from 'react-redux';
import {sortItems} from '../../../redux/ShopList/ShopActionCreators';


const PriceSort = ({sortShopItems}) => {
    const [activeClass, setActiveClass] = useState('');

    const sortAndSetActiveClass = (parameter) => {
        sortShopItems(parameter);
        setActiveClass(parameter)
    }

    return (
        <div className ='price-sort-container'>
            <button className ={`${activeClass === 'HIGH_TO_LOW'? 'active' : null} price-sort__button`} onClick = {() => sortAndSetActiveClass('HIGH_TO_LOW') }> PRICE HIGH TO LOW</button>
            <button className ={`${activeClass === 'LOW_TO_HIGH'? 'active' : null} price-sort__button`} onClick = {() => sortAndSetActiveClass('LOW_TO_HIGH')}> PRICE LOW TO HIGH</button>
            <button className ={`${activeClass === 'SORT_BY_DISCOUNT'? 'active' : null} price-sort__button`} onClick = {() => sortAndSetActiveClass('SORT_BY_DISCOUNT')}> DISCOUNT</button>
            <button className = 'price-sort__button' onClick = {() => sortAndSetActiveClass(' ')}> RESET</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        sortShopItems : (parameter) => dispatch(sortItems(parameter))
    }
}

export default connect(null, mapDispatchToProps)(PriceSort);