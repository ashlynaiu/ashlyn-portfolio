import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <h3>Projects</h3>
        <h4><Link to="/unstructured" onClick={() => this.props.changePageState('unstructured')}>Unstructured to Structured Data in Quip</Link></h4>
        <h4><Link to="/timeline" onClick={() => this.props.changePageState('timeline')}>Salesforce Industries Timeline Redesign</Link></h4>
        <h4><Link to="/action-plan" onClick={() => this.props.changePageState('actionPlan')}>Financial Services Cloud Action Plan</Link></h4>
        <h4><Link to="/" onClick={() => this.props.changePageState('home')}>About</Link></h4>
      </div>
    );
  }
}

export default Nav;
