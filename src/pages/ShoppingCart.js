import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar';
import '../styles/cart.css';
import BackIcon from '../images/back_icon.png';
import CartProducts from '../components/CartProducts';

class ShoppingCart extends Component {
  // state = {
  //   totalItems: [],
  // };

  // componentDidMount() {
  //   const { totalItems } = this.state;
  //   const cartProducts = ;
  //   this.setState({ totalItems: cartProducts });
  //   console.log(cartProducts);
  //   this.addQuantity();
  // }

  cartTotal = () => {
    const cartProducts = JSON.parse(localStorage.getItem('item'));
    const total = cartProducts.map((product) => product.price);
    const totalPrice = total.reduce((acc, currVal) => acc + currVal, 0);
    const roundPrice = totalPrice.toFixed(2);
    return roundPrice;
  };

  addQuantity = () => {
    const cartProducts = JSON.parse(localStorage.getItem('item'));
    const arrOfIds = cartProducts.map((product) => product.id);
    const sortedIds = arrOfIds.sort();
    const arrOfQuantities = [];
    for (let i = 0; i < sortedIds.length; i += 1) {
      const objOfQuantity = {};
      if (i === 0) {
        console.log(arrOfQuantities);
        objOfQuantity.id = sortedIds[i];
        objOfQuantity.total = 1;
        arrOfQuantities.push(objOfQuantity);
      }
      if (i > 0 && sortedIds[i] !== sortedIds[i - 1]) {
        objOfQuantity.id = sortedIds[i];
        objOfQuantity.total = 1;
        arrOfQuantities.push(objOfQuantity);
      }
      if (i > 0 && sortedIds[i] === sortedIds[i - 1]) {
        const findId = arrOfQuantities.find((product) => product.id === sortedIds[i]);
        findId.total += 1;
      }
    }
    arrOfQuantities.forEach((product) => {
      const findQuantity = cartProducts.find((match) => product.id === match.id);
      product.price = findQuantity.price;
      product.thumbnail = findQuantity.thumbnail;
      product.title = findQuantity.title;
    });
    console.log(arrOfQuantities);
    return arrOfQuantities;
  };

  render() {
    const total = this.cartTotal();
    const quantity = this.addQuantity();
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
              {quantity.map((product) => (
                <CartProducts
                  key={ product.id }
                  productTitle={ product.title }
                  productImg={ product.thumbnail }
                  productPrice={ product.price }
                  productTotal={ product.total }
                />
              ))}
              {/* <img>close Image</img> */}
            </div>
          </div>
          <div className="cart-buy">
            <h2>Valor Total da Compra</h2>
            <h3>{ `R$ ${total}` }</h3>
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
