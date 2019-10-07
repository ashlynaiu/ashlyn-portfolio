import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import ScrollToTop from './helpers/ScrollToTop';

import Footer from './components/Footer';
import Nav from './components/Nav';

import Home from './components/Home';
import Unstructured from './components/Unstructured';
import Timeline from './components/Timeline';

class App extends Component {
  constructor(props) {
    super(props);
    this.changePageState = this.changePageState.bind(this);
    this.state = {
      page: ''
    }
  }

  changePageState(e) {
    return this.setState({ page: e });
  }

  render() {
    console.log(this.state.page)
    return (
      <div className="mainContainer">
        <Router>
          <div className="mainContent">
            
            <Route exact={true} path="/" component={Home} />
            <Route path="/unstructured" component={() => <Unstructured changePageState={this.changePageState}/>} />
            <Route path="/timeline" component={() => <Timeline changePageState={this.changePageState}/>} />
          </div>
          <Nav changePageState={this.changePageState} page={this.state.page} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
