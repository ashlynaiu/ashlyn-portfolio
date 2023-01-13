import React, { Component } from 'react';

import search1 from '../images/search-1.jpg';
import search2 from '../images/search-2.jpg';
import search3 from '../images/search-3.jpg';
import search4 from '../images/search-4.jpg';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <h1>Ashlyn Watters</h1>
        <h2>Discovery on a Legacy Marketplace</h2>

        <div className="project-details">
          <p><b>Team:</b> AppExchange</p>
          <p><b>Role:</b> Product Design Architect</p>
          <p><b>Status:</b> MVP Launched</p>
          <p><b>Time Frame:</b> Approximately May 2021 - October 2022</p>
          <p><b>Execution:</b> Product Definition, User Research, User Story Mapping and User Flows, Wireframes, High Fidelity Mock</p>
        </div>

        <h3 className="first">Problem Statement</h3>

        <p>The AppExchange marketplace was considered a legacy, enterprise marketplace that struggled to engage its customers. Through qualitative and quantitive data, it was uncovered that customers were using outside communities to find apps that might solve their business problems. We discovered that customer have these 3 main pain points with using AppExchange:</p>

        <p><b>Poor new user onboarding</b> - Customers don't understand best practices to search and browse for the most relevant apps  aligned to their industry, products, and use cases.</p>

        <p><b>Lack of Personalization</b> - AppExchange does not meet industry marketplace standards to provide curated personalization and recommendations to help guide users on industry and use case best practices and trends. Customers rely on external sources to learn how to solve their use cases, rather than using AppExchange as a trusted source of information and solution browsing.</p>

        <p><b>Lack of Filtering Options and Consistency</b> - With thousands of solutions on AppExchange, customers don't currently have robust and clear filtering patterns to browse the most relevant apps. Filtering should be as complex or simple as our customers need to find exactly what they are looking for.</p>

        <h3>Persona</h3>
        <p>The most interesting aspect of picking apart the user research for this project was that we discovered that what mattered more than persona definition was persona mindsets. Based on factors like Salesforce product familiarity and where the user was in their discovery journey, I started to realized that the expectations of the marketplace shifted greatly. While the business admin was our key persona, I ended up breaking this persona into 3 mindsets (Prospect, Explorer, Super User) with their own Jobs to Be Done.</p>

        <h3>Project Goals</h3>
        <p>For this project, I was tasked with reimagining what the user discovery journey for apps on the marketplace. From new users to super users, AppExchange should be a relevant resource for customers to expand their Salesforce ecosystem to do more.</p>

        <h3>Project Pieces</h3>
        <p>While this epic encompasses six distinct project areas that I have lead the vision around, I’ve currently lead two projects from complete inception to launch. </p>

        <h3>Personalized Search Bar </h3>
        <div className="project-details">
          <p><span className="highlight">Status:</span> Phase 1 Launched</p>
        </div>
        <p>Regardless of authentication status or Salesforce product experience, AppExchange will begin to surface search term and app recommendations before the users has even started typing. By pulling user activity and profile data, our search bar will displaying relevant industry apps that will help all users kick off a meaningful search experience.</p>

        <div className="photo-grid">
          <div className="row">
            <img src={search1} alt="" />
            <img src={search2} alt="" />
          </div>
        </div>

        <h3>Simplified Search Results and Filtering</h3>
        <div className="project-details">
          <p><span className="highlight">Status:</span> Phase 1 Launched</p>
        </div>
        <p>This project eliminates the existence of the three distinct search result page layouts; all with different filtering and sorting functionality. The new designs align the search experiences across the site to have a cohesive design that is expected, familiar, and robust.</p>

        <p>The design proposal also included plans to enables improved filtering options that more closely align with customer expectations and priorities. </p>

        <div className="photo-grid">
          <div className="row">
            <img src={search3} alt="" />
            <img src={search4} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
