import React from 'react';
import './Sort.styles.scss'
import PriceSort from './Price-Sort/Price-Sort.component';
const Sort = () => {
    return <div className ='sort-container'>
                <span><b>SORT BY</b> </span>
                <PriceSort></PriceSort>
            </div>
}

export default Sort;