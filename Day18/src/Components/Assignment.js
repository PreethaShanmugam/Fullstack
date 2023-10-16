import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Student from './Student';
import './AssignmentDetail.css';

export default function Assignment() {
  const [assignments, setAssignments] = useState([]);
  const { courseId } = useParams(); // Get the courseId from the URL

  useEffect(() => {
    // Fetch assignments for the given courseId
    axios.get(`http://localhost:5056/assignment/getAssignment/${courseId}`)
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching assignments:', error);
      });
  }, [courseId]);

  return (
    <>
    <div><Student /></div>
    <div>
    <div className="assignment-container"></div>
      <h2  className="assignment-title">Assignments</h2>
      <ul className="assignment-list">
        {assignments.map((assignment) => (
          <li className="assignment-item"key={assignment.id}>
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
            {/* Add more assignment details here */}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
