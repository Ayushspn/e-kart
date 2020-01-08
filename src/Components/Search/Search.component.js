import React, {useState, useEffect} from 'react';
import './search.styles.scss';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {searchTitle} from '../../redux/ShopList/ShopActionCreators';

const Search = ({searchForTitle, history}) => {
    const [searchTxt, setSearchTxt] = useState('');
    const inputChangeHandle = (event) => {
        setSearchTxt(event.target.value)
        searchForTitle(event.target.value)
    }

    useEffect(() => {
        setSearchTxt('')
    },[])
    
    return (
        <div className ='search-icon'>
            {history.location.pathname === '/' ? 
            <><input className ='form-control search-box' type='search' value = {searchTxt} onChange = {(event) => inputChangeHandle(event)}
            placeholder ='search by name'
            ></input>
            <button className ='serach-button'><i className="fa fa-search" aria-hidden="true"></i></button></>
             : null}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchForTitle : (title) => dispatch(searchTitle(title))
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Search));