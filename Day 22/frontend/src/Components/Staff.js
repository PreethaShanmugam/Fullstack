import React, { useEffect, useState }  from 'react';
import './Staff.css';
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch} from "react-redux";
import { logout } from '../Redux/UserSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUser,faSignOutAlt, faUserPlus,faCheck} from '@fortawesome/free-solid-svg-icons';
function Staff() {
  
  const dispatch = useDispatch();


  const handleLogout = () => {
    dispatch(logout());
  };
 
  
  return (
    <div className="Staffback">
    <div className="Staffdashboard">
      <header>
        <h3>Dashboard</h3>
      </header>
      <div className="sidebarstaff">
        <div className="widget">
        <div className="staff-title11" >
                  <Link to="/profile2">
                    <FontAwesomeIcon icon={faUser}/>  Student profile
                  
                  </Link>
                </div>
        <div className="staff-title22" >
                  <Link to="/sturegg">
                    <FontAwesomeIcon icon={faUserPlus}/>  Add Student
                  
                  </Link>
                </div>
        <div className="staff-title33" >
                  <Link to="/Courses">
                    <FontAwesomeIcon icon={faBook}/>  Courses
                  </Link>
                </div>
        <div className="staff-title44" >
                  <Link to="/addcourse">
                    <FontAwesomeIcon icon={faUserPlus}/>  Add Courses
                  </Link>
                </div>
        <div className="staff-title55" >
                  <Link to="/attendance">
                    <FontAwesomeIcon icon={faCheck}/>  Attendance
                  </Link>
                </div>
                <div>
        <Link to="/">
                  <div onClick={handleLogout} className="staff-title77">
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
