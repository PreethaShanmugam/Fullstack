import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../Redux/UserSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Layout.css';

// Import the Dropdown component
import Dropdown from './Dropdown'; // Replace with the actual path to your Dropdown component

export default function Layout({ children }) {
  const user = useSelector(selectUser);
  const username = user ? user.username : 'Guest';

  return (
    <>
      <nav>
        <div className="Navlist">
          <ul>
            <div className="Navli">
              <li>
                <div className="logo">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5403/5403496.png"
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
                  <Link to="/">Home</Link>
                </div>
              </li>
              <li>
                <div className="usericon">
                  <FontAwesomeIcon icon={faUserCircle} />
                </div>
              </li>
              <li>
                <div className="loginnnicon">
                  <Dropdown />
                </div>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      {children}
      <div className="logoutt">
        {username}
      </div>
    </>
  );
}
