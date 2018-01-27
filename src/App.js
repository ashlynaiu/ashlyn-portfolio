import React, { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Header></Header>
        <Home></Home>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
