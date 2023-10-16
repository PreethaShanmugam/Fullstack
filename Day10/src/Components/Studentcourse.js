import React, { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom'; // Import React Router components
import './Studentcourse.css';
import Student from './Student';
import AssignmentPage from './AssignmentPage'; // Import the AssignmentPage component (dummy path)

export default function Courses() {
  const [dropdownStates, setDropdownStates] = useState({
    course1: false,
    course2: false,
    course3: false,
    course4: false,
    course5: false,
  });

  const toggleDropdown = (course) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [course]: !prevState[course],
    }));
  };

  return (
    <>
      <div><Student/></div>
      <div className="container-homepage">
        <div className='roomtypes'>
          {/* Course 1: Mathematical Structures */}
          <div className='rooms'>
            <div className='des'>
              Mathematical Structures
              <h6>Course Code: 21HS002</h6>
              <br />
              <Link to="/assign">Assignments</Link> {/* Link to AssignmentPage */}
              <div className="dropdown">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/windows/32/menu-2.png"
                  alt="menu-2"
                  onClick={() => toggleDropdown('course1')}
                />
                {dropdownStates.course1 && (
                  <div className="dropdowcontent">
                    <p>Grades</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Course 2: Programming for Problem Solving */}
          <div className='rooms'>
            <div className='des'>
              Programming for Problem Solving
              <h6>Course code: 21IT303</h6>
              <br />
              <Link to="/assign">Assignments</Link> {/* Link to AssignmentPage */}
              <div className="dropdown">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/windows/32/menu-2.png"
                  alt="menu-2"
                  onClick={() => toggleDropdown('course2')}
                />
                {dropdownStates.course2 && (
                  <div className="dropdowcontent">
                    <p>Grades</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Course 3: Networking and Communication */}
          <div className='rooms'>
            <div className='des'>
              Networking and Communication
              <h6>Course code: 21ECE201</h6>
              <br />
              <Link to="/assignments/networking">Assignments</Link> {/* Link to AssignmentPage */}
              <div className="dropdown">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/windows/32/menu-2.png"
                  alt="menu-2"
                  onClick={() => toggleDropdown('course3')}
                />
                {dropdownStates.course3 && (
                  <div className="dropdowcontent">
                    <p>Grades</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Course 4: Operating Systems */}
          <div className='rooms'>
            <div className='des'>
              Operating Systems
              <h6>Course code: 21IT201</h6>
              <br />
              <Link to="/assignments/operating-systems">Assignments</Link> {/* Link to AssignmentPage */}
              <div className="dropdown">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/windows/32/menu-2.png"
                  alt="menu-2"
                  onClick={() => toggleDropdown('course4')}
                />
                {dropdownStates.course4 && (
                  <div className="dropdowcontent">
                    <p>Grades</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Course 5: Add more courses following the same structure */}
          {/* <div className='rooms'>
            <div className='des'>
              Course Name
              <h6>Course code: XXXXXXX</h6>
              <br />
              <Link to="/assignments/course-link">Assignments</Link> {/* Link to AssignmentPage */}
              {/* <div className="dropdown">
                <img
                  width="32"
                  height="32"
                  src="https://img.icons8.com/windows/32/menu-2.png"
                  alt="menu-2"
                  onClick={() => toggleDropdown('course5')}
                />
                {dropdownStates.course5 && (
                  <div className="dropdowcontent">
                    <p>Grades</p>
                  </div>
                )}
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Define routes for different pages using Routes */}
      <Routes>
        <Route path="/assign" element={<AssignmentPage />} />
        {/* Add more routes for other courses if needed */}
      </Routes>
    </>
  );
}
