import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import { getProductById } from '../services/api';
import '../styles/product-detail.css';
import BackIcon from '../images/back_icon.png';

class ProductDetail extends Component {
  state = {
    product: {},
  };

  componentDidMount() {
    this.fetchGetProductsDetails();

    const store = localStorage.getItem('item');
    if (!store) {
      const newStore = [];
      localStorage.setItem('item', JSON.stringify(newStore));
    }
  }

  fetchGetProductsDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const product = await getProductById(id);

    this.setState({
      product,
    });
  };

  saveProductToCart = () => {
    const {
      product:
      {
        id,
        price,
        thumbnail,
        title } } = this.state;
    const store = JSON.parse(localStorage.getItem('item'));
    console.log(store);
    const product = { id, price, thumbnail, title };
    const arrayOfProducts = store;
    arrayOfProducts.push(product);
    localStorage.setItem('item', JSON.stringify(arrayOfProducts));
    // console.log(arrayOfProducts);
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
          data-testid="product"
          className="container-detail"
        >
          <div className="detail-page-left">

            <Link
              to="/"
              alt="Voltar"
              className="back"
            >
              <img
                src={ BackIcon }
                alt="Voltar"
              />
            </Link>

            <div
              data-testid="product-detail-link"
              className="page-name-image"
            >
              <div
                data-testid="product-detail-name"
                className="product-detail-title"
              >
                {title}
              </div>
              <img
                data-testid="product-detail-image"
                src={ thumbnail }
                alt={ title }
                className="product-detail-img"
              />
            </div>
          </div>

          <div className="detail-page-right">
            <div className="page-pecs-price-button">
              <h2
                data-testid="product-detail-name"
              >
                {title}

              </h2>
              <h2>Descrição</h2>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime atum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime atum.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime atum.
              </li>
            </div>
            <div
              data-testid="product-detail-price"
              className="product-detail-price"
            >
              R$
              {' '}
              {price}
            </div>
            <div className="product-detail-price">
              <button
                // data-testid="shopping-cart-button"
                value={ id }
                data-testid="product-detail-add-to-cart"
                onClick={ () => this.saveProductToCart() } // USAR LOCALSTORAGE!
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
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
