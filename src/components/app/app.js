import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage, CartPage } from '../pages/';

import './app.css';

class App extends React.Component {

  render() {
    // console.log(this.props.bookstoreService.getBooks());
    return (
      <Switch>
        <Route path="/" component={ HomePage } exact />
        <Route path="/cart" component={ CartPage } />
      </Switch>
    );
  }
}

export default App;