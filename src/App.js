import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from './helpers/ScrollToTop';

import Footer from './components/Footer';
import Nav from './components/Nav';

import Home from './components/Home';
import Search from './components/Search';
import Templates from './components/Templates';
import Unstructured from './components/Unstructured';
import Timeline from './components/Timeline';
import ActionPlans from './components/ActionPlans';

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
    return (
      <div className="mainContainer">
        <Router>
          <div className="mainContent">
          <ScrollToTop />
            <Route exact={true} path="/" component={Home} />
            <Route path="/search" component={() => <Search changePageState={this.changePageState}/>} />
            <Route path="/templates" component={() => <Templates changePageState={this.changePageState}/>} />
            <Route path="/unstructured" component={() => <Unstructured changePageState={this.changePageState}/>} />
            <Route path="/timeline" component={() => <Timeline changePageState={this.changePageState}/>} />
            <Route path="/action-plan" component={() => <ActionPlans changePageState={this.changePageState}/>} />
          </div>
          <Nav changePageState={this.changePageState} page={this.state.page} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
