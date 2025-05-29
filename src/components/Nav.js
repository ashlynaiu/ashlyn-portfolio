import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>Past Projects</h3>
        <h4><Link to="/search" onClick={() => this.props.changePageState('search')}>Discovery on a Legacy Marketplace</Link></h4>
        <h4><Link to="/templates" onClick={() => this.props.changePageState('templates')}>Automated Quip Templates</Link></h4>
        <h4><Link to="/unstructured" onClick={() => this.props.changePageState('unstructured')}>Unstructured to Structured Data in Quip</Link></h4>
        <h4><Link to="/timeline" onClick={() => this.props.changePageState('timeline')}>Salesforce Industries Timeline Redesign</Link></h4>
        {this.props.page === 'home' || '' ? '' : <h4><Link to="/" onClick={() => this.props.changePageState('home')}>About</Link></h4>}
      </nav>
    );
  }
}

export default Nav;
