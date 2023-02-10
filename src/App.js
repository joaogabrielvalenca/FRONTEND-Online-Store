import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './component/ShoppingCart';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
      </BrowserRouter>
    );
  }
}
export default App;
