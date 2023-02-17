import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';

class ShoppingCart extends Component {
  render() {
    return (
      <div className="container-home">
        <div className="container-nav">
          <NavBar />
        </div>
        <div className="container-content">
          <div className="content">
            <div data-testid="shopping-cart-empty-message">
              <p>Seu carrinho está vazio</p>
              <br />
              <Link to="/" alt="Voltar">Voltar</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
