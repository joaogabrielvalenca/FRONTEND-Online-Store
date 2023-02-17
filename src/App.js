import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import {
  getCategories,
  getProductsFromCategoryAndQuery,
} from './services/api';

class App extends Component {
  state = {
    categoryList: [],
    productList: undefined,
    searchInputReturn: '',
    categoryId: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitButtonClick = async () => {
    this.fetchGetProducts();
  };

  fetchGetProducts = async () => {
    const { categoryId, searchInputReturn } = this.state;

    const { results } = await getProductsFromCategoryAndQuery(
      categoryId,
      searchInputReturn,
    );

    this.setState({
      productList: results,
    });
  };

  // função capturar id da categoria que cliquei e alterar no estado categoryid
  subCategoryList = ({ target: { name } }) => {
    this.setState({
      categoryId: name,
    }, this.fetchGetProducts);
  };

  fetchGetCategories = async () => {
    const categoryList = await getCategories();

    this.setState({
      categoryList,
    });
  };

  render() {
    const { searchInputReturn, categoryList, productList } = this.state;

    return (
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => (<Home
            searchInputReturn={ searchInputReturn }
            handleChange={ this.handleChange }
            submitButtonClick={ this.submitButtonClick }
            fetchGetCategories={ this.fetchGetCategories }
            fetchGetProducts={ this.fetchGetProducts }
            categoryList={ categoryList }
            productList={ productList }
            subCategoryList={ this.subCategoryList }
            { ...props }
          />) }
        />
        <Route path="/shoppingcart" component={ ShoppingCart } />
        <Route path="/productdetail/:id" component={ ProductDetail } />
      </Switch>
    );
  }
}
export default App;
