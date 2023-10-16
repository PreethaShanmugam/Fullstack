import React from 'react';
import './Staff.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardList, faUser,faMedal, faCheck, faFile } from '@fortawesome/free-solid-svg-icons';

function Staff() {
  return (
    <div className="Staffback">
    <div className="Staffdashboard">
      <header>
        <h3>Dashboard</h3>
      </header>
      <div className="sidebarstaff">
        <div className="widget">
        <div className="staff-title11" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faUser}/>  Student profile
                  
                  </Link>
                </div>
        <div className="staff-title22" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faBook}/>  Courses
                  </Link>
                </div>
        <div className="staff-title33" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faFile}/>   Assignment
                  </Link>
                </div>
        <div className="staff-title44" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faCheck}/>  Attendance
                  </Link>
                </div>
        <div className="staff-title55" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faClipboardList}/>  Exams
                  </Link>
                </div>
        <div className="staff-title66" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faMedal}/>   Grades
                  </Link>
                </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Staff;
