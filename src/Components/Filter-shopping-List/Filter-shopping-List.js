import React from 'react';
import './Filter-shopping.styles.scss';

const FilterShoppingList = ({minRangeChangeHandler, maxRangeChangelHandler, minValue, maxValue}) => {
    return(
        <div className ='filter-container'>
            <div>
                <span className='pull-left'>&#x20b9;{minValue}</span>
                <span className='pull-right'>&#x20b9; {maxValue}</span>
            </div>
            <div style ={{'clear' : 'both'}}></div>
            <input  min="100" max="1000" step="100" type="range" onChange = {minRangeChangeHandler} value = {minValue}/>
            <input  min="1000" max="10000" step="100" type="range" onChange = {maxRangeChangelHandler} value = {maxValue}/>
            <p style = {{textAlign : 'center'}}>Price</p>
        </div>
    )
}

export default FilterShoppingList;