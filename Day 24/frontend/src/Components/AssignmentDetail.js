import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Staff from './Staff';
import './AssignmentDetail.css';
// ... (other imports and CSS classes)

export default function AssignmentDetail() {
  const [assignmentData, setAssignmentData] = useState({
    title: '',
    courseId: '',
    description: '' // Add courseId input
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAssignmentData({
      ...assignmentData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    // Create an assignment with the courseId
    axios.post(`http://localhost:5056/assignment/createAssignment/${assignmentData.courseId}`, assignmentData)
      .then((response) => {
        // Handle success, e.g., show a success message or reset the input fields
        console.log('Assignment created:', response.data);
      })
      .catch((error) => {
        console.error('Error creating assignment:', error);
      });
  };
  


  return (
    <>
      <div><Staff /></div>
      <div className="regggg">
        <div className="containerrr">
          <div className="titleee">Assignments</div>
          <div className="user-detailsss">
            <div className="input-boxxx">
              <span className="detailsss">Assignment Title</span>
              <input type="text" name="title" value={assignmentData.title} onChange={handleInputChange} />
            </div>
            <div className="input-boxxx">
              <span className="detailsss">CourseId</span>
              <input type="text" name="courseId" value={assignmentData.courseId} onChange={handleInputChange} />
            </div>
            <div className="input-bo">
              <span className="detailsss">Description</span>
              <input type="text" name="description" value={assignmentData.description} onChange={handleInputChange} />
            </div>
            <div className="butt">
              <input onClick={handleSubmit} type="Submit" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
