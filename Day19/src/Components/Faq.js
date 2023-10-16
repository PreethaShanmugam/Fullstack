import React from 'react';
import './Faq.css';

export default function Faq() {
  return (
    <div className="faq">
      <h1 className="faqhh"><br />FAQ</h1><br />
      <input id="faq-a" type="checkbox" />
      <label htmlFor="faq-a">
        <p className="faq-heading">How is academic performance evaluated in this system?</p>
        <div className="faq-arrow" />
        <p className="faq-text">
          <br />
          <br />
          Academic performance is evaluated based on grades, class participation, exams, assignments, and overall GPA, ensuring a comprehensive assessment of your progress.
        </p>
      </label>
      <input id="faq-b" type="checkbox" />
      <label htmlFor="faq-b">
        <p className="faq-heading">How can this system benefit educational institutions?</p>
        <div className="faq-arrow" />
        <p className="faq-text">
          <br />
          <br />
          An SDMS offers various advantages to educational institutions, including:
          - Efficient organization and retrieval of student records.
          - Streamlined administrative processes.
          - Improved communication with students and parents.
          - Enhanced data security and privacy.
          - Easy access to academic records and attendance information.
        </p>
      </label>
      <input id="faq-c" type="checkbox" />
      <label htmlFor="faq-c">
        <p className="faq-heading">What types of data are typically stored in this system?</p>
        <div className="faq-arrow" />
        <p className="faq-text">
          <br />
          <br />
          An SDMS typically stores various student data, including:
          - Personal information (name, contact details, etc.).
          - Academic records (courses, grades, transcripts).
          - Attendance records.
          - Enrollment history.
          - Financial information (tuition fees, scholarships, etc.).
          - Contact details of parents or guardians.
        </p>
      </label>
      <input id="faq-d" type="checkbox" />
      <label htmlFor="faq-d">
        <p className="faq-heading">How can institutions ensure data security in this system?</p>
        <div className="faq-arrow" />
        <p className="faq-text">
          <br />
          <br />
          Data security in an SDMS can be ensured through user authentication, role-based access control, data encryption, and regular backups. It's essential to comply with data protection regulations and implement best practices in data security.
        </p>
      </label>
      <input id="faq-e" type="checkbox" />
      <label htmlFor="faq-e">
        <p className="faq-heading">What are the technical requirements for using in this system?</p>
        <div className="faq-arrow" />
        <p className="faq-text">
          <br />
          <br />
          To use this system, instructors will need a computer with a working Internet connection and a web browser. Students can access it from various devices with web browsers and an Internet or cellular connection. For the best experience, it's recommended to use the latest version of Google Chrome or a recent version of any major browser.
        </p>
      </label>
    </div>
  );
}
