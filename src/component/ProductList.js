import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <div>
        <div data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
        <div>
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">Carrinho</Link>
        </div>
      </div>
    );
  }
}
export default ProductList;
