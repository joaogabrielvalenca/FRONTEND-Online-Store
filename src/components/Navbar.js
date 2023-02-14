import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FormSearch from './SearchForm';
import '../styles/navbar.css';

class NavBar extends Component {
  render() {
    const { searchInputReturn, handleChange, submitButtonClick } = this.props;

    return (
      <div className="container-nav">
        <div className="nav-input">
          <FormSearch
            searchInputReturn={ searchInputReturn } // Envia props
            handleChange={ handleChange }
            submitButtonClick={ submitButtonClick }
          />
        </div>

        <div className="nav-logo">
          logo
        </div>

        <div className="nav-cart-icon">
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
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
