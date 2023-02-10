import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import '../styles/home.css';
import NavBar from '../components/Navbar';

class Home extends Component {
  render() {
    return (
      <div className="container-home">
        <div className="container-nav">
          <NavBar />
        </div>
        <div className="container-content">
          <div className="content">
            <ProductList />
          </div>

        </div>
      </div>
    );
  }
}

export default Home;
