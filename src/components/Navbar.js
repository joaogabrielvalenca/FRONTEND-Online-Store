import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormSearch from './SearchForm';
import '../styles/navbar.css';
import LogoStore from '../images/logo_store.png';
import CartIcon from '../images/cart_icon.png';

class NavBar extends Component {
  render() {
    const { searchInputReturn, handleChange, submitButtonClick } = this.props;

    return (
      <div className="container-nav">
        <div>
          <FormSearch
            searchInputReturn={ searchInputReturn } // Envia props
            handleChange={ handleChange }
            submitButtonClick={ submitButtonClick }
          />
        </div>

        <div className="nav-logo">
          <img src={ LogoStore } alt="Online Store" />
        </div>

        <div className="nav-cart-icon">
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            <div>
              <p>99</p>
            </div>
            <img src={ CartIcon } alt="Carrinho" />
          </Link>
        </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  searchInputReturn: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitButtonClick: PropTypes.func.isRequired,
};

export default NavBar;
