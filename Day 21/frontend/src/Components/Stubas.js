import React, { useEffect, useState } from 'react';
import './Staffbas.css';
import Staff from './Staff';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Stubas() {
  
  return (
    <>
      <div><Staff /></div>
      <div className="reggg">
        <div className="containerr">
          <div className="titlee">Registration</div>
          <div className="contentt">
            <form action="#">
              <div className="user-detailss">
                <div className="input-boxx">
                  <span className="detailss">Email</span>
                  <input type="text" placeholder="Enter email" required="" />
                </div>
                <div className="input-boxx">
                  <span className="detailss">Password</span>
                  <input type="text" placeholder="Enter password" required="" />
                </div>
                <div className="input-boxx">
                  <span className="detailss">Name</span>
                  <input type="text" placeholder="Enter Name" required="" />
                </div>
                <div className="input-boxx">
                  <span className="detailss">Role</span>
                  <input type="text" placeholder="Enter Role" required="" />
                </div>
              </div>
              <Link to="/stureg">
              <div className="buttonn">
                <input type="submit" value="Next" />
              </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
