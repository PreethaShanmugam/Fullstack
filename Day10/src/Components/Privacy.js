import React, { useState } from 'react';
import './Privacy.css'; // Import the CSS file

function Privacy() {
  const [agreed, setAgreed] = useState(false);

  const handleAgreeChange = () => {
    setAgreed(!agreed);
  };

  return (
    <div id="conditions">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center terms-style">
            <h2>
              <strong>Privacy Policy</strong>
            </h2>
            <hr />
          </div>
        </div>
        <div className="row terms-style">
          <div className="col-md-12 text-center terms-info">
            <strong>Privacy Policy of Evaluation of Academic Performance</strong>

            Our commitment to protecting your privacy is a top priority. This Privacy Policy outlines how we collect, use, and safeguard your personal information in the context of evaluating academic performance. By using our services, you consent to the practices described in this policy.
            <br/>
            <strong>1. Information Collection</strong>
            
            We may collect the following types of information:
            
            - Personal Information: This may include your name, student ID, email address, and contact details. This information is collected to identify and communicate with you.
            
            - Academic Data: We collect academic records, course enrollment details, grades, and performance data to evaluate your academic progress.
            
            - Usage Information: We collect data on how you interact with our systems, including log files, device information, and browsing history when using our online platforms.
            <br/>
            <strong>2. Information Usage</strong>
            
            We use the collected information for the following purposes:
            
            - Academic Evaluation: To assess and manage your academic performance, including grading, course enrollment, and progress tracking.
            
            - Communication: To send important updates, notifications, and announcements related to your academic journey.
            
            - System Improvement: To enhance our services, we analyze usage patterns and feedback to improve user experience and system functionality.
            <br/>
            <strong>3. Data Security</strong>
            
            We take data security seriously and employ industry-standard measures to protect your information from unauthorized access, disclosure, alteration, and destruction.
            <br/>
            <strong>4. Data Sharing</strong>
            
            We may share your information with:
            
            - Educational Institutions: To facilitate academic evaluation and reporting as required by your educational institution.
            
            - Authorized Personnel: Only authorized personnel with a legitimate need will have access to your data.
            
            - Legal Compliance: When required by law, we may disclose your information to comply with legal obligations or protect our rights, privacy, safety, or property.
            <br/>
            <strong>5. Cookies and Tracking</strong>
            
            We may use cookies and similar tracking technologies to improve our services and user experience. You can manage your cookie preferences in your browser settings.
            <br/>
            <strong>6. Your Choices</strong>
            
            You have the right to access, correct, or delete your personal information. You can also opt-out of certain communications.
            <br/>
            <strong>7. Changes to this Policy</strong>
            
            We may update this Privacy Policy to reflect changes in our practices. Please review this policy periodically for any updates.
            <br/>
            <strong>8. Contact Us</strong>
            
            If you have questions or concerns about this Privacy Policy, please contact us at [contact email].
            
            By using our services, you agree to the terms of this Privacy Policy and consent to the collection, use, and sharing of your information as described herein.
            <br/>

            <p>
              <strong>Privacy Policy of Evaluation of Academic Performance</strong><br />
              <br />
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
              I Agree to the Privacy Policy
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
