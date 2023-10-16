import React from 'react';
import './AssignmentPage.css';
import Staff from './Staff.js';

const Question = () => {
  return (
    <>
      <div><Staff></Staff></div>
      <div className="assignment-page">
        <h1>Assignment 1</h1>
        <div className="assignment-content">
          <p>
            Assignment Title: "Responsive Web Design Challenge"
          </p>
          <p>
            Description:
            <br />
            Design and code a responsive website that adapts seamlessly to various screen sizes, from desktop to mobile. Showcase your understanding of HTML, CSS, and media queries to create a user-friendly and visually appealing experience. Ensure that the website's layout, navigation, and content adjust gracefully across devices.
          </p>
          <p>
            Requirements:
            <ul>
              <li>Build a multi-page website with consistent branding.</li>
              <li>Utilize media queries to achieve responsiveness.</li>
              <li>Test the website on desktop, tablet, and mobile devices.</li>
              <li>Ensure readability and usability in all viewports.</li>
              <li>Submit the project's codebase and a live demo link for evaluation.</li>
            </ul>
          </p>
        </div>
      </div>
    </>
  );
};

export default Question;
