import React, { useState, useRef } from 'react';
import './AssignmentPage.css';
import Student from './Student.js';

const AssignmentPage = () => {
  const [file, setFile] = useState(null);
  const [uploadConfirmed, setUploadConfirmed] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUploadClick = () => {
    // Trigger the file input click event
    fileInputRef.current.click();
  };

  const handleConfirmUpload = () => {
    if (file) {
      // Handle file upload logic here, e.g., send the file to a server.
      console.log('Uploading file:', file);
      // You can add your upload logic here.
      setUploadConfirmed(true); // Set the confirmation state to true
    } else {
      console.log('No file selected');
    }
  };

  const handleCancelUpload = () => {
    setFile(null); // Clear the selected file
    setUploadConfirmed(false); // Reset the confirmation state
  };

  return (
    <>
      <div><Student></Student></div>
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

        {!uploadConfirmed ? ( // Show file upload input and confirmation buttons
          <div className="upload-container">
            <input
              type="file"
              className="upload-input"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            <button onClick={handleUploadClick} className="upload-button">
              Upload Assignment
            </button>
            {file && (
              <>
                <button onClick={handleConfirmUpload} className="confirm-button">
                  Confirm Upload
                </button>
                <button onClick={handleCancelUpload} className="cancel-button">
                  Cancel
                </button>
              </>
            )}
          </div>
        ) : (
          // Show upload confirmation message
          <div className="confirmation-message">
            <p>File uploaded successfully!</p>
            <button onClick={handleCancelUpload} className="confirm-button">
              OK
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AssignmentPage;
