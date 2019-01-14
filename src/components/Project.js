import React, { Component } from 'react';

class Project extends Component {
  render() {

    return (
      <div className="port-main-content--columns">
        <div className="port-main-column--small">
          <a><img src="/static-images/port-home-{{data.image}}.jpg" alt="" /></a>
        </div>
        <div className="port-main-column--large">
          <h3><a>{{data.name}}</a></h3>
          <p>{{data.description}}</p>
          <a>Check it out</a>
        </div>
    </div>
  )
}

export default Project;