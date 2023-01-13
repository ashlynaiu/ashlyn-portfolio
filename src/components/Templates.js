import React, { Component } from 'react';

import template1 from '../images/template-1.png';
import template2 from '../images/template-2.jpg';
import template3 from '../images/template-3.png';
import template4 from '../images/template-4.png';
import template5 from '../images/template-5.png';

class Templates extends Component {
  render() {
    return (
      <div className="templates">
        <h1>Ashlyn Watters</h1>
        <h2>Automated Quip Templates</h2>

        <div className="project-details">
          <p><b>Team:</b> Quip</p>
          <p><b>Role:</b> Lead Product Designer</p>
          <p><b>Status:</b> Launched</p>
          <p><b>Time Frame:</b> Approximately November 2019 - August 2020</p>
          <p><b>Execution:</b> Product Definition, User Research, User Story Mapping and User Flows, Wireframes, High Fidelity Mocks, Team Management</p>
        </div>

        <h3 className="first">Overview</h3>
        <p>As a Sales agent closing a deal, there are various steps and processes that the agent must complete. Some of these steps include coaching, legal processes, team collaboration for product pitches, or license negotiations strategies. Without Quip, this collaboration would happen outside of Salesforce where that data is siloed, not trackable, and frequently out of data. Our team saw that Quip was already being leveraged in unexpected ways to solve these business use cases. We wanted to deeply understand what was working, what wasn't, and how we could prioritize the gaps in our product to meet our customer's need for automated document generation in Salesforce.</p>

        <h3>Problem Statement and Personas</h3>

        <p>This project was exceptionally large where a PM and I uncovered a plethora of pain points all under an umbrella theme of templated documents. These were the big picture problems we discovered through our research.</p>

        <p><i>Template creators also known as Business Admins:</i></p>
        <ul>
            <li> Didn't have a good method for managing and organizing templates they wanted to surface to the organization.</li>
            <li>Needed extreme flexibility in template creation because a one-size-fits-all was resulting in poor adoption of their templates.</li>
            <li>Find it difficult to get end users in Quip to adopt best practices of linking Quip documents to Salesforce records for improved reporting.</li>
        </ul>

        <p><i>Template end users:</i></p>
        <ul>
            <li>Couldn't easily customize or create their own templates that are better suited to their needs.</li>
            <li>Cloning and populating templates with Salesforce data is very manual and repetitive</li>
        </ul>

        <h3>Project Goals</h3>
        <ul>
          <li>Make it possible for end users to create, find, use and generate templates in as few steps as possible.</li>
          <li>Whether the user is in Quip or Salesforce; templates leverage the same automation functionality.</li>
          <li>Enable template creators and admins to organize and manage templates.</li>
          <li>Enable admins to enforce templating best practices.</li>
        </ul>

        <h3>Project Pieces</h3>
        <p>This was a new challenge for the engineering team where Product and Design had a clear, customer validated end vision, and compromising too much for MVP on the user experience could jeopardize the adoption at launch. Working through these details of how we would achieve our vision through a series of phases was a strenuous process.</p>

        <div className="photo-grid">
          <div className="row">
            <img src={template1} alt="" />
            <img src={template2} alt="" />
          </div>
        </div>

        <p>After about a month of war room like planning, the core team had agreement on the phases and was ready to involve the broader team. In my role, I managed the direction and work of an Intern and Associate Designer. The design team completed project work ranging from Admin Template setup, new Salesforce template components, a new Quip template library, and feature work allowing auto population of live Salesforce data into Quip documents. The design and product team worked across internal and external (Salesforce Products) teams to achieve an end to end solution for our customers that contributed in Quip hitting their new sales quota for the first time since their Salesforce acquisition.</p>

        <p>A couple projects that I had solely designed during this epic included:</p>

        <h3>Auto-Populating Salesforce Reports</h3>
        <div className="project-details">
          <p><span className="highlight">Status:</span> Shipped</p>
        </div>
        <p>This was a highly requested feature that would generate Salesforce reports automatically when a template was cloned. It was an interesting challenge to align our feature with Salesforce design patterns where it made sense; but to develop new patterns that could improve the overall user experience. Bridging the Salesforce and Quip design language was an evolving challenge.</p>

        <div>
          <img src={template5} alt="" />
        </div>

        <h3>Salesforce Process Builder and Flow API Additions</h3>
        <div className="project-details">
          <p><span className="highlight">Status:</span> Shipped</p>
        </div>
        <p>This project resulted in a series of sketched prototypes and design guidelines for how the engineers would implement and scale Salesforce automation triggers. The sketches allowed the engineers to feel empowered to give me fast, iterative feedback and did not require custom components. Allowing for scale of API calls was incredibly important. Once the UI and API was launched, it would not be possible to change. I unforuntely don't have any interesting sketches to share for this one! A lot of them ended up being on whiteboards.</p>

        <h3>Salesforce Admin Setup</h3>
        <div className="project-details">
          <p><span className="highlight">Status:</span> Shipped</p>
        </div>
        <p>This project started with a large series of complex lucid chart diagrams that our team used to ensure that Quip and Salesforce integration setup would be as seamless as possible. The big focus of this project was handling the many edge cases of “failures" and how the admin could solve the integration failure. This was most in-depth "error message" project I have tackled. The left image is a before, while the right image is an after.</p>

        <div className="photo-grid">
          <div className="row">
            <img src={template3} alt="" />
            <img src={template4} alt="" />
          </div>
        </div>

      </div>
    );
  }
}

export default Templates;
