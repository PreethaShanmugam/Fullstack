import React, { useState } from 'react';
import {  Navigate,useNavigate } from 'react-router-dom';
import './StudentLogin.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = (e) => {
    e.preventDefault(); 
    if (email.length === 0 || password.length === 0) {
      alert('Please enter all fields');
    } else if (password.length < 8) {
      alert('Password should be at least eight characters long');
    } 
    else
    {
      Navigate('/Student')
    }
  };

  return (
    <div>
      <div className="Studentimg">
        <div className="Studentmain">
          <h1 className="Studenttitle">Student Login</h1>
          <input
            className="Studentemail"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="Studentpassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            onClick={authenticate}
            className="Studentsubmit"
            type="submit"
            value="Login"
          />
        </div>
      </div>
    </div>
  );
}
