import React from 'react';
import './Header.styles.scss';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import Search from '../Search/Search.component';
const Header = ({cartCount, history}) => {

    const redirectTocartPage = () => {
        history.push('CheckOut')
    }
    return (
        <div className="header row">
            <div className="col-md-8">
            <Link to="/" className="logo">CompanyLogo</Link>
            </div>
            <div className="col-md-4">
                <Search/>
                <div className='cart-icon'>
                <button className ='cart-button pull-right' onClick = {() => redirectTocartPage()}><i className="fa fa-shopping-cart" aria-hidden="true"><span className ='cartItem'>{cartCount}</span></i></button>
                </div>
            </div>
        </div>
    )
}

const mapstateToProps = ({shop: {cartItemCount}}) => {
    return {
        cartCount : cartItemCount
    }
}

export default connect(mapstateToProps)(withRouter(Header));