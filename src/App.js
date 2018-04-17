import React, { Component } from 'react';
import Footer from './components/Footer';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
