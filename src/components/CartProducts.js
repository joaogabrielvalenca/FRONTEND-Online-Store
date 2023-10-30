import React from 'react';
import PropTypes from 'prop-types';

class CartProducts extends React.Component {
  render() {
    const {
      productTitle,
      productImg,
      productPrice,
      productTotal,
    } = this.props;
    return (
      <div className="container-content">
        <div className="cart-container">
          <div className="cart">
            <h5 data-testid="shopping-cart-product-name">{productTitle}</h5>
            <img
              className="product-img"
              src={ productImg }
              alt="imagem do Produto"
            />
            <p data-testid="shopping-cart-product-quantity">{productTotal}</p>
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
  productTotal: PropTypes.number.isRequired,
};

export default CartProducts;
