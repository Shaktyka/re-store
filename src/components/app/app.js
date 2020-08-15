import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ShopHeader from '../shop-header';
import { HomePage, CartPage } from '../pages/';

import './app.css';

class App extends React.Component {

  render() {
    // console.log(this.props.bookstoreService.getBooks());
    return (
      <main role="main" className="container">
        <ShopHeader numberItems={5} total={210} />
        <Switch>
          <Route path="/" component={ HomePage } exact />
          <Route path="/cart" component={ CartPage } />
        </Switch>
      </main>
    );
  }
}

export default App;