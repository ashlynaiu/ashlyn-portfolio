import React, { Component } from 'react';
import actionplan1 from '../images/actionplan-1.png';
import actionplan2 from '../images/actionplan-2.png';
import actionplan3 from '../images/actionplan-3.png';
import actionplan4 from '../images/actionplan-4.png';
class ActionPlans extends Component {
  render() {
    return (
      <div className="unstructured">
        <h1>Ashlyn Watters</h1>
        <h2>Action Plans Version 2</h2>

        <div className="project-details">
          <p><b>Team:</b> Financial Services Cloud</p>
          <p><b>Role:</b> Lead Product Designer</p>
          <p><b>Status:</b> In-progress: Phase 2</p>
          <p><b>Time Frame:</b> Started August 2015; MVP Shipped June 2016; Version 2 In-Progress</p>
          <p><b>Execution:</b> User Research, User Story Mapping and User Flows, Wireframes, High Fidelity Mocks </p>
        </div>
        
        <h3 className="first">Problem Statement</h3>
        <p>Salesforce end users rely on tasks for everything. They use tasks to track the most simple processes, accomplish their daily goals, and relay progress to their managers and team members. </p>

        <p>While working closely with the Financial Service Cloud team to ship the MVP version of Action Plans; there were some obvious gaps that had been created to compromise with Engineering to ship the feature on time. Once shipped, managers and buyers raved about having out-of-the-box functionality to create repeatable, standardized task execution. However, Action Plans has missed the mark in helping the end users manage and execute daily tasks. Instead of streamlining their flow works and bringing faster insights, Action Plan gives the user a sub-par experience by increasing clicks. Without strong end user adoption, the true benefit of action plans becomes negligible.</p> 

        <p>How might we improve the end-user experience of Action Plans to streamline task management and execution?</p>

        <img src={actionplan1} alt="" />

        <h3>Use Cases</h3>
        <p><b>Ability to auto-check completed tasks done in Salesforce</b><br/>
        <i>Example:</i> Task is to upload W2 form. Task would trigger a work flow to upload W2 form. Once form is updated, task marks it as complete.</p> 

        <p><b>New Action Plans can be triggered based on changes to specific fields.</b><br/>
        <i>Example:</i> Stage on opportunity changes and then new action plan is applied.</p>

        <p><b>Auto-close Action Plans</b><br/>
        <i>Example:</i> Use stage on lead changes, automatically close out action plan tasks.</p>

        <p><b>Improved visibility</b><br/>
        <i>Example:</i> When coming to an opportunity, business user should be able to quickly see what tasks are done and what tasks are still open to mark stage complete.</p> 

        <h3>Goals of Project</h3>
        <p>An improved action plan component would give quick insights into what tasks have happened, need to happen now, and future tasks. This insights should drive planning, execution, and efficiency for end users.</p>

        <h3>High Fidelity Explorations</h3>
        <div className="photo-grid">
          <div className="row">
            <img src={actionplan2} alt="" />
            <img src={actionplan3} alt="" />
          </div>
          <div className="row">
            <img src={actionplan4} alt="" />
          </div>
        </div>

      </div>
    );
  }
}

export default ActionPlans;
