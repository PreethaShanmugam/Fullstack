import React, { useState } from 'react';
import './Condition.css'; // Import the CSS file

function Conditions() {
  const [agreed, setAgreed] = useState(false);

  const handleAgreeChange = () => {
    setAgreed(!agreed);
  };

  return (
    <div id="terms-and-conditions">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center terms-style">
            <h2>
              <strong>Terms and Conditions of the Evaluation of Academic Performance</strong>
            </h2>
            <hr />
          </div>
        </div>
        <div className="row terms-style">
          <div className="col-md-12 text-center terms-info">
            <p>
            <p>
            <strong>1. Academic Evaluation Criteria:</strong><br />
            The evaluation of academic performance is based on several criteria, including but not limited to course assignments, examinations, projects, and class participation. These criteria may vary by course and program.
          </p>

          <p>
            <strong>2. Grading System:</strong><br />
            Our grading system uses a letter grade scale, with corresponding grade point values (GPA). The scale typically includes grades such as A, B, C, D, and F, with A representing excellent performance and F indicating failure. The specific grading scale may be outlined in course syllabi.
          </p>

          <p>
            <strong>3. Grade Calculation:</strong><br />
            Grades are calculated based on the assessment methods defined by the course instructor. Typically, grades are weighted according to the importance of each assessment component. The final grade for a course is often calculated as an average or weighted sum of all assessment components.
          </p>

          <p>
            <strong>4. Attendance and Participation:</strong><br />
            Attendance and active participation in classes may be part of the evaluation process. Instructors may specify their attendance and participation requirements in course syllabi.
          </p>

          <p>
            <strong>5. Academic Honesty:</strong><br />
            Academic honesty is essential. Plagiarism, cheating, and any form of academic dishonesty are strictly prohibited. Violations of academic integrity may result in disciplinary actions, including failing grades and academic penalties.
          </p>

          <p>
            <strong>6. Appeals and Grievances:</strong><br />
            If a student believes there has been an error or unfairness in the evaluation of their academic performance, they have the right to file an appeal or grievance following the procedures outlined in the institution's policies and guidelines.
          </p>

          <p>
            <strong>7. Changes to Terms and Conditions:</strong><br />
            These terms and conditions of academic evaluation may be subject to change. Any modifications will be communicated to students through official channels, and it is the responsibility of the student to stay informed about such changes.
          </p>

          <p>
            <strong>8. Conclusion:</strong><br />
            By enrolling in our educational programs, students agree to adhere to these terms and conditions of academic evaluation. We are committed to providing a fair and transparent evaluation process to help students achieve their educational goals.
          </p>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <label>
              <input
                type="checkbox"
                checked={agreed}
                onChange={handleAgreeChange}
              />{' '}
              I Agree to the Terms and Conditions
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conditions;
