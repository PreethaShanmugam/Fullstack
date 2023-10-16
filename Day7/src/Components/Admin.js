import React from 'react';
import './Admin.css';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from '../Redux/UserSlice';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faClipboardList, faUser,faMedal, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
const Admin = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  // Check if user is not null before accessing its properties
  const username = user ? user.username : "Guest";
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
    <div className="logout">
      Welcome, {username}
     <button onClick={handleLogout} className="buttonn">  Logout</button>
    </div>
    <div className="Adminback">
     <div className="dashboard-container">
       <header>
        <h3>Dashboard</h3>
      </header>
      <div className="sidebar-content">
        <div className="widget">
        <div className="widget-title1" >
                  <Link to="/Studentprofile">
                    <FontAwesomeIcon icon={faUser}/>  Student profile
                  
                  </Link>
                </div>
        <div className="widget-title2" >
                  <Link to="/Courses">
                    <FontAwesomeIcon icon={faBook}/>  Courses
                  </Link>
                </div>
        <div className="widget-title3" >
                  <Link to="/Exams">
                    <FontAwesomeIcon icon={faClipboardList}/>  Exams
                  </Link>
                </div>
        <div className="widget-title4" >
                  <Link to="/Grades">
                    <FontAwesomeIcon icon={faMedal}/>   Grades
                  </Link>
                </div>
        <div className="widget-title5" >
                  <Link to="/">
                    <FontAwesomeIcon icon={faSignOutAlt}/>   Logout
                  </Link>
                </div>
        </div>
      </div>
    </div>
    </div>
    </>
  );
  }

export default Admin;
