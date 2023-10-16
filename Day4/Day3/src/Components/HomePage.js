import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <div>
    <div className="Home">
    <div className="tit"> <h1>Academic details</h1> </div>
        <Link to="/AdminLogin" className="Homeadmin">
          AdminLogin
        </Link>
        <Link to="/StaffLogin" className="Homestaff">
          StaffLogin
        </Link>
        <Link to="/StudentLogin" className="Homestudent">
          StudentLogin
        </Link>
      </div>
    </div>
  );
}
