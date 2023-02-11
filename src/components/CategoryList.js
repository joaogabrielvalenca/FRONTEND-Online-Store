import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/category.css';

class CategoryList extends Component {
  render() {
    const { fetchGetCategories } = this.props;
    return (
      <div className="category-list">
        {fetchGetCategories
          .map((product) => (
            <button
              id="categoryId"
              name="categoryName"
              key={ product.id }
              type="radio"
              data-testid="category"
            >
              { product.name }
            </button>
          ))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  fetchGetCategories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default CategoryList;
