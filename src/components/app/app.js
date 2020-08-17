import React from 'react';

import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages/';

import './app.css';

const App = (props) => {
  const {orderTotal, cartItems} = props;
  const itemsAmount = cartItems.reduce((acc, item) => acc + item.count, 0);

  return (
    <main role="main" className="container">
      <ShopHeader itemsAmount={itemsAmount} total={orderTotal} />
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path="/cart" component={ CartPage } />
      </Switch>
    </main>
  );
}

const mapStateToProps = ({shoppingCart}) => {
  const { orderTotal, cartItems } = shoppingCart;
  return { orderTotal, cartItems };
};

export default connect(mapStateToProps)(App);