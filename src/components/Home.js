import React, { Component } from 'react';

class Home extends Component {
  render() {
    var styles = {
      background:'red',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat'
    };

    return (
      <div className="homeTitle mainContent">
        <h1>Hey there, my name is Ashlyn.</h1>
        <h2>I'm a Product Designer in San Francisco.</h2>
        <div className="projectContainer">
            <div className="hexagon">
              <div className="hex1">
                <div className="hex2" style={styles}>
                  <div className="desc">
                    <h2>Welcome this is an epic title</h2>
                    <p>website</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;
