import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/home.css';
import NavBar from '../components/Navbar';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';

class Home extends Component {
  componentDidMount() {
    const { fetchGetCategories } = this.props;
    fetchGetCategories();
  }

  render() {
    const {
      searchInputReturn,
      handleChange,
      submitButtonClick,
      categoryList,
      productList,
      subCategoryList,
      submittSave,
    } = this.props;

    return (
      <div className="container-home">
        <div className="container-nav">
          <NavBar
            searchInputReturn={ searchInputReturn }
            handleChange={ handleChange }
            submitButtonClick={ submitButtonClick }
          />
        </div>
        <div className="container-content">
          <div className="content-left">
            <CategoryList
              fetchGetCategories={ categoryList }
              subCategoryList={ subCategoryList }
            />
          </div>
          <div className="content-right">
            <div>
              <ProductList
                productOrCategoryFound={ productList }
                submittSave={ submittSave }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  searchInputReturn: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitButtonClick: PropTypes.func.isRequired,
  fetchGetCategories: PropTypes.func.isRequired,
  categoryList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  productList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  subCategoryList: PropTypes.func.isRequired,
  submittSave: PropTypes.func.isRequired,
};

export default Home;
