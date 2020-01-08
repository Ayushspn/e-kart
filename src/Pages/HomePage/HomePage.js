import React, { useEffect, useState } from 'react';

import ShoppingList from '../../Components/Shopping-List/Shopping-List.component';
import FilterShoppingList from '../../Components/Filter-shopping-List/Filter-shopping-List';
import Spinner from '../../Components/HOC/spinner/spinner.component'
import Modal from '../../Components/modal/modal.component';
import PriceSort from '../../Components/Sort/Price-Sort/Price-Sort.component';

import { connect } from 'react-redux';
import './Hompage.modules.scss';
import { fetchShopList, ApplyFilter } from '../../redux/ShopList/ShopActionCreators';
import { SetSpinnerFlag } from '../../redux/ShopList/ShopActionCreators'

const HomePage = ({ getShoppingList, filterShoppingList, setSpinnerFlag, spinnerStatus }) => {
    const [minValue, setMinValue] = useState(100);
    const [maxValue, setMaxValue] = useState(10000);
    const [modal, setopenModal] = useState(false);
    const [renderCmp, setrenderCmp] = useState('');
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
       // setopenModal(false);
    }

    const openModal = (renderComponent) => {
        setrenderCmp(renderComponent);
        setopenModal(true);
    }

    const closModal = () => {
        setopenModal(false);
    }

    return (
        <>
            <Spinner isLoading={spinnerStatus}></Spinner>
            <Modal modal={modal}
            modalType = {renderCmp}
            >
                {renderCmp === 'FILTER' ? <div>
                    <FilterShoppingList
                        minRangeChangeHandler={(event) => getMinRangeValue(event)}
                        minValue={minValue}
                        maxValue={maxValue}
                        maxRangeChangelHandler={(event) => getMaxRangeValue(event)}
                    ></FilterShoppingList>
                    <div>
                        <button onClick={() => applyRangeFilter()} className='apply-rng-btn__modal'> Apply Range</button>
                        <button onClick={() => closModal()} className='apply-rng-btn__modal'>Close</button>
                    </div>
                </div>
                
                : 
                <div>
                <PriceSort renderSortingForMobile = {true}/>
                <button onClick={() => closModal()} className='apply-rng-btn__modal'>Close</button>
                </div>
            
            }
            </Modal>
            <div className='row main-container'>
                <div className='col-md-3 col-lg-3'>
                    <div className='filter-sort-mobile desctop-display__none'>
                        <div className='filter-sort-icon'>
                            <i className="fa fa-sort" onClick={() => openModal('SORT')}>Sort</i>
                        </div>
                        <div className='filter-sort-icon'>
                            <i className="fa fa-filter" onClick={() => openModal('FILTER')}>Filter</i>
                        </div>
                    </div>
                    <div className='mobile-display__none'>
                        <div className='filter-text'><b>Filter</b></div>
                        <FilterShoppingList
                            minRangeChangeHandler={(event) => getMinRangeValue(event)}
                            minValue={minValue}
                            maxValue={maxValue}
                            maxRangeChangelHandler={(event) => getMaxRangeValue(event)}
                        ></FilterShoppingList>
                        <div className='apply-btn-container'>
                            <button onClick={() => applyRangeFilter()} className='apply-rng-btn mobile-display__none'> Apply Range</button>
                        </div>
                    </div>
                </div>
                <div className='col-md-9 col-lg-9'>
                    <ShoppingList></ShoppingList>
                </div>
            </div>
        </>
    )
}

const mapsStateToProps = ({ shop: { spinnerFlag } }) => {
    return {
        spinnerStatus: spinnerFlag
    }
}


const mapDispatchToProps = dispatch => {
    return {

        getShoppingList: () => dispatch(fetchShopList()),
        filterShoppingList: (rangeObj) => dispatch(ApplyFilter(rangeObj)),
        setSpinnerFlag: (flag) => dispatch(SetSpinnerFlag(flag))
    }
}

export default connect(mapsStateToProps, mapDispatchToProps)(HomePage);