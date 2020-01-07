import React from 'react';
import './Sort.styles.scss'
import PriceSort from './Price-Sort/Price-Sort.component';
const Sort = () => {
    return <div className ='sort-container'>
                <PriceSort></PriceSort>
            </div>
}

export default Sort;