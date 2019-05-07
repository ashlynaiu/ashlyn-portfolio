import React, { Component } from 'react';
//import data from '../models';
// import Project from './Project'
// import { isNullOrUndefined } from 'util';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: ''
    }
  }
  componentWillMount() {
    console.log(this.state.backgroundColor)
    let hue = 0;
      setInterval(() => {
        var col1 = Math.abs((hue % 720) - 360);
        var col2 = Math.abs( ( (hue+90) % 720) - 360);
        hue++;
        let newColor = 'linear-gradient(to right, hsl('+col1 +',70%, 70%) 0%,hsl('+col2 +',90%, 70%) 100%)';
        console.log(newColor);
        this.setState({ backgroundColor: newColor});
      }, 3000);
  }
  render() {
    
    return (
      <div className="mainContent" style={{backgroundImage: this.state.backgroundColor}}>
        <div className="port-view-homepage-header" id="header-animation">
          <h1>Hey, my name is Ashlyn</h1>
          <div className="port-view-homepage-header-line"></div>
          <h2>Product Designer in San Francisco</h2>
        </div>
        <section className="port-main-content port-project-layout">
          <div className="port-project-layout-projects">
          
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
