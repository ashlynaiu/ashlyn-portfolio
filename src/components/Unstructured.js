import React, { Component } from 'react';

import quip1 from '../images/quip-1.gif';
import quip2 from '../images/quip-2.gif';
import quip3 from '../images/quip-3.gif';
class Unstructured extends Component {
  render() {
    return (
      <div className="unstructured">
        <h1>Ashlyn Aiu</h1>
        <h2>Unstructured to Structured Data in Quip</h2>

        <div className="project-details">
          <p><b>Team:</b> Quip</p>
          <p><b>Role:</b> Lead Product Designer</p>
          <p><b>Status:</b> In-progress: Phase 2</p>
          <p><b>Time Frame:</b> Started February 2019</p>
          <p><b>Execution:</b> Product Definition, User Research, User Story Mapping and User Flows, Wireframes, High Fidelity Mocks</p>
        </div>

        <h3 className="first">Problem Statement</h3>
        <p>Notes are taken outside of Salesforce and then manually translated to call notes, tasks, and record updates. End users require extensive training and rigorous workflow to adopt Salesforce patterns.</p>

        <h3>Persona</h3>
        <ul>
          <li>The user who needs the 5% of Salesforce capabilities.</li>
          <li>The user who's workflow is generally not within Salesforce and often wastes time searching for the right records and fields to update.</li>
        </ul>

        <h3>Project Goals</h3>
        <ul>
          <li>Clear linking between collaboration/productivity space and relevant Salesforce records.</li>
          <li>Efficient workflows that encourage users to save data back to Salesforce.</li>
          <li>Seamless Salesforce activity logging, record updating, note taking and collaboration: providing the most important 5% of Salesforce capabilities.</li>
        </ul>

        <h3>Project Pieces</h3>
        <p>Rather than one specific feature, this project required multiple pieces to achieve a successful solution. The Product Manager and I broke down the project into these pieces. </p>
        <h3>Record and Document Linking</h3>
        <div className="project-details">
          <p><span className="highlight">Status:</span> Shipped</p>
        </div>
        <p>Deliver a simple, digestible, prominent way for users to see the connected Salesforce records when viewing embedded or associated documents in Quip. This project makes it possible for users in Quip to see the Salesforce records associated with the document, and attach documents to Salesforce records from within Quip.</p>

        <div className="gif-container">
          <img src={quip1} alt="" />
        </div>

        <h3>Activity Logging</h3>
        <div className="project-details">
          <p><span className="highlight">Status:</span> Shipped</p>
        </div>
        <p>End users are required to log all activity into Salesforce for reporting and project tracking. After taking meeting notes, users have to to go through a tedious process to post logged calls and activities. By enabling activity logging straight from Quip, efficiency and workflows are significantly improved.</p>

        <div className="gif-container">
          <img src={quip2} alt="" />
        </div>

        <h3>Smart Record Updating</h3>
        <div className="project-details">
          <p><span className="highlight">Status:</span> Design Iteration</p>
        </div>
        <p>Deliver a truly integrated experience between Quip and CRM that enables natural language updates into Salesforce via the Einstein Assistant Application Platform.Plus, improve Quip+Salesforce story by finally delivering on an end user experience that optimizes for the way sales and service reps work naturally. Creating a natural pipeline of Sales customers looking at the value proposition Quip gives them on top of team selling. </p>

        <div className="gif-container">
          <img src={quip3} alt="" />
        </div>
      </div>
    );
  }
}

export default Unstructured;
