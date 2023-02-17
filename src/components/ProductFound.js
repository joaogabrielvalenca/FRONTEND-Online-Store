import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/product-found.css';
import { Link } from 'react-router-dom';

class ProductFound extends Component {
  render() {
    const {
      id,
      price,
      thumbnail,
      title,
    } = this.props;

    return (
      <div>
        <div
          data-testid="product"
          className="product-card"
        >
          <Link
            data-testid="product-detail-link"
            to={ `/productdetail/${id}` }
          >
            <div
              // data-testid="product-detail-image"
              className="product-img"
            >
              <img
                // data-testid="product-detail-image"
                src={ thumbnail }
                alt={ title }
              />
            </div>
            <div className="product">
              <div
                // data-testid="product-detail-name"
                className="product-title"
              >
                {title}
              </div>
              <div
                // data-testid="product-detail-price"
                className="product-price"
              >
                R$
                {price}
              </div>

            </div>
          </Link>
          <Link to="/ShoppingCart">
            <div className="product-price">
              <button
                data-testid="shopping-cart-button"
                name={ id }
              >
                Adicionar ao carrinho
              </button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

ProductFound.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductFound;
