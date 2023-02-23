import React from 'react';

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
            <h5>{ productTitle }</h5>
            <img
              className="product-img"
              src={ productImg }
              alt="imagem do Produto"
            />
            <p>Quantidade: A FAZER</p>
            <h6>

              {`R$ ${productPrice}`}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

// CartProducts.propTypes = {
//   productImg: Proptypes.string.isRequired,
//   productTitle: Proptypes.string.isRequired,
//   productPrice: Proptypes.number.isRequired,
// };

export default CartProducts;
