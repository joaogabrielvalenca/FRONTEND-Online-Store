import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <div>
        <div data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
      </div>
    );
  }
}
export default ProductList;
