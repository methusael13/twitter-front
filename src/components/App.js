import React, { Component } from 'react';
import Header from './Header';
import ContentArea from './ContentArea';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <Header />
        <ContentArea />
      </div>
    );
  }
}

export default App;
