import React from 'react';
import './About.css'; // Import the CSS file

function About() {
  return (
    <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center text-style">
              <h2>
                <strong>About us</strong>
              </h2>
              <hr />
            </div>
          </div>
          <div className="row about-style">
            <div className="col-md-12 text-center about-info">
              <p>
                Welcome to our website, a
                state-of-the-art solution designed to streamline and enhance
                the management of student information.
                <br/>
                <br/>
                Our DBMS empowers educational institutions to efficiently organize, 
                access, and secure student data, ensuring a seamless administrative process.
                <br/>
                With a user-friendly interface and robust features, our system
                has become an essential tool for administrators, educators, and
                students alike.
              </p>
              <p>
                Key Features:
                <ul>
                  <li>Efficient Student Record Management</li>
                  <li>Course Registration and Scheduling</li>
                  <li>Grades and Performance Tracking</li>
                  <li>Attendance Monitoring</li>
                  <li>Reporting and Analytics</li>
                  <li>Secure Access Control</li>
                </ul>
              </p>
              <p>
                Our mission is to provide educational institutions with the
                tools they need to optimize their administrative processes,
                improve communication, and ultimately enhance the student
                experience.
                <br />
                Whether you're an educational institution or an IT enthusiast,
                our Student DBMS is designed to meet your specific needs.
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default About;
