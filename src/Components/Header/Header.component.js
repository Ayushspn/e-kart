import React from 'react';
import './Header.styles.scss';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
const Header = ({cartCount, history}) => {

    const redirectTocartPage = () => {
        history.push('CheckOut')
    }
    return (
        <div className="header">
            <a href="#default" className="logo">CompanyLogo</a>
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