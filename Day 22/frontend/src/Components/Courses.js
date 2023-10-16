import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Studentcourse.css';
import Staff from './Staff';
import { Link ,useNavigate} from 'react-router-dom';
import AssignmentDetail from './AssignmentDetail';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [dropdownStates, setDropdownStates] = useState({});

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
 
  
  
  return (
    <>
      <div><Staff /></div>
      <div className="cor">
      <div className="container-homepage">
        <div className='roomtypes'>
          {courses.map((course) => (
            <div className='rooms' key={course.courseid}>
              <div className='des'>
                {course.coursename}
                <h6>Course Code: {course.coursecode}</h6>
                <br />
                <Link to={`/assignment/${course.courseid}`}>Assignments</Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>

     </div> 
    </>
  );
}
