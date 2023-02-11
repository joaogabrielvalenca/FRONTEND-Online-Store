import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import '../styles/home.css';
import NavBar from '../components/Navbar';
import CategoryList from '../components/CategoryList';
import { getCategories } from '../services/api';

class Home extends Component {
  state = {
    categoryListReturn: [],
  };

  componentDidMount() {
    this.fetchGetCategories();
  }

  // handleChange = ({ target: { name, value } }) => {
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  fetchGetCategories = async () => {
    const categoryListReturn = await getCategories();

    this.setState({
      categoryListReturn,
    });
  };

  render() {
    const { categoryListReturn } = this.state;

    return (
      <div className="container-home">
        <div className="container-nav">
          <NavBar />
        </div>
        <div className="container-content">
          <div className="content-left">
            <CategoryList fetchGetCategories={ categoryListReturn } />
          </div>
          <div className="content-right">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
