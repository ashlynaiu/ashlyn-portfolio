import React, { Component } from 'react';
import Home from './components/Home';
import Unstructured from './components/Unstructured';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
          <ScrollToTop>
          <div className="mainContent">
            <Route exact={true} path="/" component={Home} />
            <Route path="/unstructured" component={() => <Unstructured changePageState={this.changePageState}/>} />
          </div>
          <Nav changePageState={this.changePageState} page={this.state.page} />
          </ScrollToTop>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
