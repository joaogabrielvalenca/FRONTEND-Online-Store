import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/product-found.css';

class ProductFound extends Component {
  render() {
    const {
      // id,
      price,
      thumbnail,
      title,
    } = this.props;

    return (
      <div>
        <div data-testid="product" className="product-card">
          <div className="product-img">
            <img src={ thumbnail } alt={ title } />
          </div>
          <div className="product">
            <div className="product-title">
              {title}
            </div>
            <div className="product-price">
              R$
              {' '}
              {price}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ProductFound.propTypes = {
  // id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductFound;
