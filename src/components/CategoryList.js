import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/category.css';

class CategoryList extends Component {
  render() {
    const { fetchGetCategories, subCategoryList } = this.props;

    return (
      <div className="category-list">
        {fetchGetCategories
          .map((category) => (
            <button
              id={ category.id }
              name={ category.id }
              key={ category.id }
              type="button"
              value={ category.id }
              onClick={ subCategoryList }
              data-testid="category"
            >
              { category.name }
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
  subCategoryList: PropTypes.func.isRequired,
};

export default CategoryList;
