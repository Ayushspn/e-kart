import React, {useState} from 'react';
import './search.styles.scss';
import {connect} from 'react-redux';
import {searchTitle} from '../../redux/ShopList/ShopActionCreators';

const Search = ({searchForTitle}) => {
    const [searchTxt, setSearchTxt] = useState('');
    const inputChangeHandle = (event) => {
        setSearchTxt(event.target.value)
        searchForTitle(event.target.value)
    }
    
    return (
        <div className ='search-icon'>
            <input className ='form-control search-box' type='search' value = {searchTxt} onChange = {(event) => inputChangeHandle(event)}></input>
            <button><i class="fa fa-search" aria-hidden="true"></i></button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchForTitle : (title) => dispatch(searchTitle(title))
    }
}

export default connect(null, mapDispatchToProps)(Search);