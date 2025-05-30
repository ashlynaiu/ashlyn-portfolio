import React, { Component } from 'react';

import resume from '../images/ashlyn-watters-resume.pdf';

class App extends Component {
  render() {
    return (
      <footer>
        <ul className="footer">
          <li className="icon"><a href="https://www.linkedin.com/in/ashlyn-watters" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
          <li className="icon"><a href="https://github.com/ashlynaiu" rel="noopener noreferrer" target="_blank"><i className="fa-brands fa-github-alt"></i></a></li>
          <li className="resume"><a href={resume} rel="noopener noreferrer" target="_blank"><i className="fa-regular fa-file-pdf"></i><span> R&#233;sum&#233;</span></a></li>
        </ul>
      </footer>
    );
  }
}

export default App;
