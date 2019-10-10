import React, { Component } from 'react';

import timeline1 from '../images/timeline-1.png';
import timeline2 from '../images/timeline-2.png';
import timeline3 from '../images/timeline-3.png';

class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        <h1>Ashlyn Aiu</h1>
        <h2>Timeline Redesign</h2>
        <div className="project-details">
          <p><b>Team:</b> Salesforce Industries Cloud</p>
          <p><b>Role:</b> Lead Product Designer</p>
          <p><b>Status:</b> Waiting for Resources</p>
          <p><b>Time Frame:</b> August 2018 - November 2018</p>
          <p><b>Execution:</b> Product Definition, Sketching, User Research, High Fidelity Mocks </p>
        </div>
        
        <h3 className="first">Problem Statement </h3>
        <p>When reviewing activity in Salesforce, logged calls, meetings, tasks, and emails are simply not enough to give the user a clear understanding of how a relationship or project is progressing. Users need a central hub to see what happened on the account last, what is happening next, and what they can do to move the needle. Without activity insights alongside other related updates, users loose context and transparency into the overall business process.</p>
        
        <h3>Original Timeline</h3>
        <img src={timeline1} alt="" />
        
        <h3>Research showed</h3>
        <p>One on one interviews with 10 end users to understand what improvements need to be made.</p>
        <p><span className="highlight">Top Asks from Users:</span></p>
        <ul>
          <li>"Allow me to see why activities are happening? What are these activities relating to?"</li>
          <li>"Allow me to visualize automation happening on the account so that I can clearly understand what needs to happen next"</li>
          <li>"Component needs to be accessed on mobile devices."</li>
          <li>"Component doesn’t scale well when there is too much activity. UI requires that I have to constantly adjust the layout manually which is too time consuming."</li>
        </ul>
        
        <h3>Project Goals</h3>
        <p>Incorporate user feedback to improve scalability, accessibility, and other insights gathered through research streams. There was also a broader goal to expand the timeline for usage beyond just Health Cloud use cases. Other industries, such as Financial Services Cloud and Manufacturing Cloud, had strong use cases that could be satisfied by the timeline’s improvements.</p>

        <h3>Solution explorations</h3>
        <img src={timeline2} alt="" />
        
        <h3>High Fidelity Mocks</h3>
        <img src={timeline3} alt="" />
      </div>
    );
  }
}

export default Timeline;
