import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Studentcourse.css';
import Student from './Student';
import { Link,useNavigate } from 'react-router-dom';
import AssignmentDetail from './AssignmentDetail';

export default function Studentcourse() {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [dropdownStates, setDropdownStates] = useState({});
  const nav=useNavigate();

  useEffect(() => {
    // Fetch course data from the backend
    axios.get('http://localhost:5055/course/getAllcourse')
      .then((response) => {
        const courseData = response.data;
        setCourses(courseData);

        // Initialize dropdown states for each course
        const dropdownState = {};
        courseData.forEach((course) => {
          dropdownState[course.courseid] = false;
        });
        setDropdownStates(dropdownState);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const toggleDropdown = (courseid) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [courseid]: !prevState[courseid],
    }));
  };
  const email = localStorage.getItem('email');

  const token=localStorage.getItem("token")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);
  return (
    <>
      <div><Student /></div>
      <div className="container-homepage">
        <div className='roomtypes'>
          {courses.map((course) => (
            <div className='rooms' key={course.courseid}>
              <div className='des'>
                {course.coursename}
                <h6>Course Code: {course.coursecode}</h6>
                <br />
                <Link to={`/assignments/${course.courseid}`}>Assignments</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </>
  );
}
