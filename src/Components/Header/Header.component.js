import React from 'react';
import './Header.styles.scss';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom'
const Header = ({cartCount, history}) => {

    const redirectTocartPage = () => {
        history.push('CheckOut')
    }
    return (
        <div className="header">
            <Link to="/" className="logo">CompanyLogo</Link>
            <div className="header-right">
                <button className ='cart-button' onClick = {() => redirectTocartPage()}><i className="fa fa-shopping-cart" aria-hidden="true"><span className ='cartItem'>{cartCount}</span></i></button>
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