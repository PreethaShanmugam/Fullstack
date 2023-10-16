import React from 'react';
import './Admin.css';
import { useDispatch } from "react-redux";
import { logout } from '../Redux/UserSlice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUser,faMedal, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
function Admin() {
  
  const dispatch = useDispatch();

  // Check if user is not null before accessing its properties
  
  const handleLogout = () => {
    dispatch(logout());
  };
  
  return (
    <> 
    <div className="Adminback">
     <div className="dashboard-container">
     <Link to="/dashboard">
       <header>
        <h3>Dashboard</h3>
      </header>
      </Link>
      <div className="sidebar-content">
        <div className="widget">
        <div className="widget-title1" >
                  <Link to="/Studentprofile">
                    <FontAwesomeIcon icon={faUser}/>  Student profile
                  
                  </Link>
                </div>
        <div className="widget-title2" >
                  <Link to="/Staffprofile">
                    <FontAwesomeIcon icon={faUser}/>  Staff Profile
                  </Link>
                </div>
        <div className="widget-title3" >
                  <Link to="/StaffSignup">
                    <FontAwesomeIcon icon={faUserPlus}/>  Add staff
                  </Link>
                </div>
        <div className="widget-title4" >
                  <Link to="/performance">
                    <FontAwesomeIcon icon={faMedal}/>   Performance
                  </Link>
                </div>
        <div>
        <Link to="/">
                  <div onClick={handleLogout} className="widget-title5">
                    <FontAwesomeIcon icon={faSignOutAlt} />   Logout
                  </div>
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
