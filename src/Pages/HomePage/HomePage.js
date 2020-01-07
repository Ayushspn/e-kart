import React, { useEffect, useState } from 'react';

import ShoppingList from '../../Components/Shopping-List/Shopping-List.component';
import FilterShoppingList from '../../Components/Filter-shopping-List/Filter-shopping-List';
import Spinner from '../../Components/HOC/spinner/spinner.component'
import { connect } from 'react-redux';
import { fetchShopList, ApplyFilter } from '../../redux/ShopList/ShopActionCreators';
import {SetSpinnerFlag} from '../../redux/ShopList/ShopActionCreators'

const HomePage = ({ getShoppingList, filterShoppingList, setSpinnerFlag , spinnerStatus}) => {
    const [minValue, setMinValue] = useState(100);
    const [maxValue, setMaxValue] = useState(10000);
    useEffect(() => {
        getShoppingList();
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
        <>
        <Spinner isLoading= {spinnerStatus}></Spinner>
        <div className ='row main-container'>
            <div className ='col-md-3 col-lg-3'>
                <div style = {{'textAlign' : 'center'}}>Filter</div>
                <FilterShoppingList
                    minRangeChangeHandler={(event) => getMinRangeValue(event)}
                    minValue={minValue}
                    maxValue={maxValue}
                    maxRangeChangelHandler={(event) => getMaxRangeValue(event)}
                ></FilterShoppingList>
                <button onClick={() => applyRangeFilter()}> Apply Range</button>
            </div>
            <div className ='col-md-9 col-lg-9'>
                <ShoppingList></ShoppingList>
            </div>
        </div>
        </>
    )
}

const mapsStateToProps = ({shop : {spinnerFlag}}) => {
    return {
      spinnerStatus : spinnerFlag
    }
  }


const mapDispatchToProps = dispatch => {
    return {

        getShoppingList: () => dispatch(fetchShopList()),
        filterShoppingList: (rangeObj) => dispatch(ApplyFilter(rangeObj)),  
        setSpinnerFlag : (flag) => dispatch(SetSpinnerFlag(flag))
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(HomePage);