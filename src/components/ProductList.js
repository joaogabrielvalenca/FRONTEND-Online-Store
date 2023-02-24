import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductFound from './ProductFound';

class ProductList extends Component {
  render() {
    const { productOrCategoryFound, submittSave } = this.props;

    if (productOrCategoryFound === undefined) {
      return (
        <div data-testid="home-initial-message">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        </div>
      );
    }

    const productFoundMsg = (
      <div>
        <p>Nenhum produto foi encontrado</p>
      </div>
    );

    const productFoundShow = (
      <div className="container-product">
        { productOrCategoryFound.length === 0 ? productFoundMsg
          : productOrCategoryFound.map((productOrCategory) => (
            <div
              key={ productOrCategory.id }
            >
              <ProductFound
                { ...productOrCategory }
                submittSave={ submittSave }
              />
            </div>
          ))}
      </div>
    );

    return (
      <div>
        {productOrCategoryFound === undefined ? productInsertMsg : productFoundShow}
      </div>
    );
  }
}

ProductList.propTypes = {
  productOrCategoryFound: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      price: PropTypes.string,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
    }),
  ).isRequired,
  submittSave: PropTypes.func.isRequired,
};

export default ProductList;
