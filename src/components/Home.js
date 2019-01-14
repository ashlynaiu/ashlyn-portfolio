import React, { Component } from 'react';
import data from './models'
import Project from 'Project'
class Home extends Component {
  render() {

    return (
      <div className="mainContent">
        <div className="port-view-homepage-header" id="header-animation">
          <h1>Hey, my name is Ashlyn</h1>
          <div class="port-view-homepage-header-line"></div>
          <h2>Product Designer in San Francisco</h2>
        </div>
        <section className="port-main-content port-project-layout">
          <div className="port-project-layout-projects">
          {Object
            .keys(data)
            .map(key => <Project
                key={key}
                index={key}
                card={data[key]}/>)
          }
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
