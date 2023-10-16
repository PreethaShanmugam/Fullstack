import React from 'react';
import './Student.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardList, faUser,faMedal, faCheck, faFile } from '@fortawesome/free-solid-svg-icons';

function Staff() {
  return (
    <div className="Studentback">
    <div className="Studentdashboard">
      <header>
        <h3>Dashboard</h3>
      </header>
      <div className="sidebarstudent">
        <div className="widget">
        <div className="widget-title11" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faUser}/>  My profile
                  
                  </Link>
                </div>
        <div className="widget-title22" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faBook}/>  Courses
                  </Link>
                </div>
        <div className="widget-title33" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faFile}/>   Assignment
                  </Link>
                </div>
        <div className="widget-title44" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faCheck}/>  Attendance
                  </Link>
                </div>
        <div className="widget-title55" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faClipboardList}/>  Exams
                  </Link>
                </div>
        <div className="widget-title66" >
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
