import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import {  selectUser } from '../Redux/UserSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Layout.css';

export default function Layout({ children }) {
  const [showLoginMenu, setShowLoginMenu] = useState(false);

  const toggleLoginMenu = () => {
    setShowLoginMenu(!showLoginMenu);
  };

  const user = useSelector(selectUser);

  const username = user ? user.username : 'Guest';

  

  return (
    <>
    <div className="logout">
     {username}
    </div>
      <nav>
        <div className="Navlist">
          <ul>
            <div className="Navli">
              <li>
                <div className="logo">
                  <img
                    src="https://static-00.iconduck.com/assets.00/platform-internet-explorer-icon-256x252-03m4ym7c.png"
                    height="50vh"
                    width="50vh"
                    alt="img"
                  />
                </div>
              </li>
              <li>
                <div className="site-name">
                  EDU EXPLORER
                </div>
              </li>
              <li>
                <div className="Homeicon">
                  <Link to="/">
                      Home
                  </Link>
                </div>
              </li>
              <li>
                <div className="usericon">
                  <FontAwesomeIcon icon={faUserCircle} />
                </div>
              </li>
              <li>
                <div className="loginicon" onClick={toggleLoginMenu}>
                  <h5>Login</h5>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      {children}
      {showLoginMenu && (
        <div className="loginnnmenu">
          <Link to="/AdminLogin">Admin</Link>
          <Link to="/StaffLogin">Staff</Link>
          <Link to="/StudentLogin">Student</Link>
        </div>
      )}
    </>
  );
}
