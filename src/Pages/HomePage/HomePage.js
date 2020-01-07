import React, { useEffect, useState } from 'react';

import ShoppingList from '../../Components/Shopping-List/Shopping-List.component';
import FilterShoppingList from '../../Components/Filter-shopping-List/Filter-shopping-List';

import { connect } from 'react-redux';
import { fetchShopList, ApplyFilter } from '../../redux/ShopList/ShopActionCreators';

const HomePage = ({ getShoppingList, filterShoppingList }) => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    useEffect(() => {
        getShoppingList()
    }, [])

    const getMinRangeValue = (event) => {
        setMinValue(event.target.value)
    }

    const getMaxRangeValue = (event) => {
        setMaxValue(event.target.value)
    }

    const applyRangeFilter = () => {
        filterShoppingList({
            min: minValue,
            max: maxValue
        })
    }

    return (

        <div style={{ display: 'flex', marginTop: '20px' }}>
            <div style={{ width: '20vw' }}>
                <FilterShoppingList
                    minRangeChangeHandler={(event) => getMinRangeValue(event)}
                    minValue={minValue}
                    maxValue={maxValue}
                    maxRangeChangelHandler={(event) => getMaxRangeValue(event)}
                ></FilterShoppingList>
                <button onClick={() => applyRangeFilter()}> Apply Range</button>
            </div>
            <div style={{ width: '80vw' }}>
                <ShoppingList></ShoppingList>
            </div>
        </div>
    )
}



const mapDispatchToProps = dispatch => {
    return {
        getShoppingList: () => dispatch(fetchShopList()),
        filterShoppingList: (rangeObj) => dispatch(ApplyFilter(rangeObj))
    }
}

export default connect(null, mapDispatchToProps)(HomePage);