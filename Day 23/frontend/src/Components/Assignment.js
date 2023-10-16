import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Student from './Student';
import './Assignmentstu.css';
import { useNavigate } from 'react-router-dom';

export default function Assignment() {
  const [assignments, setAssignments] = useState([]);
  const { courseId } = useParams(); // Get the courseId from the URL

  useEffect(() => {
    // Fetch assignments for the given courseId
    axios
      .get(`http://localhost:5056/assignment/getAssignment/${courseId}`)
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching assignments:', error);
      });
  }, [courseId]);

  const handleUploadClick = (assignmentId) => {
    // Create an input element of type "file" for the specific assignment
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pdf, .doc, .docx'; // Specify the allowed file types

    // Handle the file selection here and perform the upload logic
    fileInput.addEventListener('change', (e) => {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        // Handle the selected file (e.g., upload it to the server)
        // You can use libraries like FormData to send the file to the server
        // Example: const formData = new FormData(); formData.append('file', selectedFile);
      }
    });

    // Trigger a click event on the file input
    fileInput.click();
  };
  


  return (
    <>
      <div>
        <Student />
      </div>
      <div className="assignment-container">
        {assignments.map((assignment) => (
          <div className="assignment-box" key={assignment.id}>
            <p className="assignment-id">Assignment: {assignment.id}</p>
            <h2 className="assignment-title">{assignment.title}</h2>
            <p className="assignment-description">{assignment.description}</p>
            <button
              className="upload-assignment-button"
              onClick={() => handleUploadClick(assignment.id)}
            >
              Upload
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
