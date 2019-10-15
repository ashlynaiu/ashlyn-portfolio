import React, { Component } from 'react';

class Home extends Component {
  render() {
    let intervalId;
    let textAnimation = ()=> {
      let hue = 0;
      let style = '';
      let col1 = Math.abs((hue % 720) - 360);
      let col2 = Math.abs( ( (hue+90) % 720) - 360);
      hue++ ;
      style = 'linear-gradient(to right, hsl('+col1 +',70%, 80%) 0%,hsl('+col2 +',90%, 80%) 100%)';
      console.log(style);
    }

    let startAnimation = ()=> {
      intervalId = setInterval(textAnimation,500);
    }

    let clearAnimation = ()=> {
      console.log('end');
      clearInterval(intervalId);
    }
    return (
        <div className="homepage">
          <h1 onMouseEnter={startAnimation} onMouseLeave={clearAnimation}>Ashlyn Aiu</h1>
          <h2>Product Designer and UX/UI Engineer</h2>
          <p className="first">Currently I am a Product Designer at <a href="https://quip.com/" target="_blank" rel="noopener noreferrer">Quip</a>, a Salesforce company. Before working for the Quip team at Salesforce, I was on the Financial Services Cloud team. While Product Design is my main focus now, I was previously a UI Engineer at <a href="https://www.zenefits.com/" target="_blank" rel="noopener noreferrer">Zenefits</a> and also got to wear numerous hats at <a href="https://www.icracked.com/" target="_blank" rel="noopener noreferrer">iCracked</a> as a Designer and Engineer. I enjoy being apart of the entire product lifecycle; from inital customer discovery and research to creating React prototypes and high fidelity mocks.</p>

          <p>These case studies are just quick glimpses into my favorite problems and solutions I have tackled over the last five years. Please reach out through <a href="https://www.linkedin.com/pub/ashlyn-aiu/42/56b/60a" target="_blank" rel="noopener noreferrer">Linkedin</a> to learn more about my process and projects.</p>
        </div>
    );
  }
}

export default Home;
