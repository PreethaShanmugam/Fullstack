import React from 'react';
import './Student.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from '../Redux/UserSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser, faCheck,faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Staff() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Check if user is not null before accessing its properties
  const username = user ? user.username : " ";
  const handleLogout = () => {
    dispatch(logout());
  };
  
  return (
    <div className="Studentback">
    <div className="Studentdashboard">
      <header>
        <h3>Dashboard</h3>
      </header>
      <div className="sidebarstudent">
        <div className="widget">
        <div className="widget-title11" >
                  <Link to="/myprofile">
                    <FontAwesomeIcon icon={faUser}/>  My profile
                  
                  </Link>
                </div>
        <div className="widget-title22" >
                  <Link to="/studentcourse">
                    <FontAwesomeIcon icon={faBook}/>  Courses
                  </Link>
                </div>
        <div className="widget-title33" >
                  <Link to="/sattendance">
                    <FontAwesomeIcon icon={faCheck}/>  Attendance
                  </Link>
                </div>
                <div>
        <Link to="/">
                  <div onClick={handleLogout} className="widget-title77">
                    <FontAwesomeIcon icon={faSignOutAlt} />   Logout
                  </div>
                  </Link>
                </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Staff;
