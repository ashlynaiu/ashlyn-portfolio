import React, { Component } from 'react';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <h1>Ashlyn Aiu</h1>
        <h2>Unstructured to Structured Data in Quip</h2>
        <div className="project-details">
          <p><b>Team:</b> Financial Services Cloud</p>
          <p><b>Role:</b> Lead Product Designer</p>
          <p><b>Status:</b> Waiting for Resources</p>
          <p><b>Time Frame:</b> Started February 2019</p>
          <p><b>Execution:</b> Product Definition, User Research, High Fidelity Mocks </p>
        </div>
        
        <h3 className="first">Problem Statement </h3>
        <p>When reviewing activity in Salesforce, logged calls, meetings, tasks, and emails are simply not enough to give the user a clear understanding of how a relationship or project is progressing. Users need a central hub to see what happened on the account last, what is happening next, and what they can do to move the needle. Without activity insights alongside other related updates, users loose context and transparency into the overall business process.</p>
        
        [image of old timeline]
        
        <h3>Research showed</h3>
        <p>One on one interviews with 10 end users to understand what improvements need to be made.</p>
        <p><b>Top Asks from Users:</b></p>
        <ul>
          <li>"Allow me to see why activities are happening? What are these activities relating to?"</li>
          <li>"Allow me to visualize automation happening on the account so that I can clearly understand what needs to happen next"</li>
          <li>"Component needs to be accessed on mobile devices."</li>
          <li>"Component doesn’t scale well when there is too much activity. UI requires that I have to constantly adjust the layout manually which is too time consuming."</li>
        </ul>
        
        <h3>Solution explorations</h3>
        
        [image wireframe sketches]
      </div>
    );
  }
}

export default Timeline;
