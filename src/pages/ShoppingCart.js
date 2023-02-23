import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import '../styles/cart.css';
import BackIcon from '../images/back_icon.png';
import CartProducts from '../components/CartProducts';

class ShoppingCart extends Component {
  render() {
    const cartProducts = JSON.parse(localStorage.getItem('item'));
    const cartTotal = cartProducts.map((product) => product.price);
    console.log(cartTotal);
    const totalPrice = cartTotal.reduce((acc, currVal) => acc + currVal, 0);
    console.log(totalPrice);
    return (
      <div className="container-home">
        <div className="container-nav">
          <NavBar />
        </div>
        <div>
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
        </div>

        <div className="container-content">
          <div className="cart-container">
            <h2>Carrinho de Compras</h2>
            <div className="cart">
              {cartProducts.map((product) => (
                !cartProducts.includes(product.id) && <CartProducts
                  key={ product.id }
                  productTitle={ product.title }
                  productImg={ product.thumbnail }
                  productPrice={ product.price }
                />
              ))}
              {/* <img>close Image</img> */}
            </div>
          </div>
          <div className="cart-buy">
            <h2>Valor Total da Compra</h2>
            <h3>{ `R$ ${totalPrice}` }</h3>
            <button>Finalizar Compra</button>
          </div>
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
