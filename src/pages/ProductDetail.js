import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import { getProductById } from '../services/api';
import '../styles/product-detail.css';

class ProductDetail extends Component {
  state = {
    product: {},
  };

  componentDidMount() {
    this.fetchGetProductsDetails();
  }

  fetchGetProductsDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);

    this.setState({
      product,
    });
  };

  render() {
    const {
      product:
      {
        id,
        price,
        thumbnail,
        title,
      },
    } = this.state;

    return (
      <div>
        <div className="container-nav">
          <NavBar />
        </div>
        <div
          data-testid="product-detail-link"
          className="container-detail"
        >
          <div
            data-testid="product"
            className="product-detail"
          >
            <img
              data-testid="product-detail-image"
              src={ thumbnail }
              alt={ title }
              className="product-detail-img"
            />
            <div className="product">
              <div
                data-testid="product-detail-name"
                className="product-detail-title"
              >
                {title}
              </div>
              <p> R$ </p>
              <div
                data-testid="product-detail-price"
                className="product-detail-price"
              >
                {' '}
                {price}
              </div>
            </div>

            <div className="product-detail-price">
              <button
                data-testid="shopping-cart-button"
                value={ id }
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
        <Link to="/" alt="Voltar">Voltar</Link>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetail;
