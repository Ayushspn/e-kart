import React from 'react';

const FilterShoppingList = ({minRangeChangeHandler, maxRangeChangelHandler, minValue, maxValue}) => {
    return(
        <>
        <input  min="100" max="1000" step="100" type="range" onChange = {minRangeChangeHandler} value = {minValue}/>
         <input  min="1000" max="10000" step="100" type="range" onChange = {maxRangeChangelHandler} value = {maxValue}/>
         <p style = {{'textAlign' : 'center'}}>{minValue} - {maxValue}</p>
        </>
    )
}

export default FilterShoppingList;