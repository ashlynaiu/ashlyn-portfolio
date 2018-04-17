import React, { Component } from 'react';

class Home extends Component {
  render() {
    var styles = {
      background:'red',
      backgroundPosition:'center',
      backgroundRepeat:'no-repeat'
    };

    return (
      <div className="mainContent">
        <div className="leftPanel">
          <h1>Ashlyn Aiu</h1>
        </div>
        <div className="rightPanel">
          <h2>Product Designer <br />
          in San Francsico</h2>
        </div>
        <div className="firstHero">
          <img src={require(`../images/hero_action_plans.png`)} />
        </div>
      </div>
    );
  }
}

export default Home;
