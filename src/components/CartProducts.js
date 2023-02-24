import React from 'react';
import PropTypes from 'prop-types';

class CartProducts extends React.Component {
  render() {
    const {
      productTitle,
      productImg,
      productPrice,
    } = this.props;
    return (
      <div className="container-content">
        <div className="cart-container">
          <div className="cart">
            <h5 data-testid="shopping-cart-product-name">{ productTitle }</h5>
            <img
              className="product-img"
              src={ productImg }
              alt="imagem do Produto"
            />
            <p data-testid="shopping-cart-product-quantity">1</p>
            <h6>

              {`R$ ${productPrice}`}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

CartProducts.propTypes = {
  productImg: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  productPrice: PropTypes.number.isRequired,
};

export default CartProducts;
