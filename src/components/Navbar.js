import React, { Component } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div className="container-nav">
        <div className="nav-input">
          Pesquisa
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

export default NavBar;
