import React, { Component } from 'react';
import Home from './components/Home';
import Unstructured from './components/Unstructured';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="mainContent">
          <Route exact={true} path="/" component={Home} />
          <Route path="/unstructured" component={() => <Unstructured />} />
        </div>
      </Router>
    );
  }
}

export default App;
