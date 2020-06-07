import React from 'react';
import './app.css';

import withBookstoreService from '../hoc';
// import ErrorBoundary from '../error-boundary/';
// import ErrorIndicator from '../error-indicator/';

class App extends React.Component {

  render() {
    console.log(this.props.bookstoreService.getBooks());
    return (
      <div>App</div>
    );
  }
}

export default withBookstoreService()(App);