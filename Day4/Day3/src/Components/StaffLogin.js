import React, { useState } from 'react';
import './StaffLogin.css';
import { Link } from 'react-router-dom';

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
  };

  return (
    <div>
      <div className="Staffimg">
        <div className="Staffmain">
          <h1 className="Stafftitle">Staff Login</h1>
          <input
            className="Staffemail"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="Staffpassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            onClick={authenticate}
            className="Staffsubmit"
            type="submit"
            value="Login"
          />
          <div className="linkregister">
            <Link to="/StaffSignup">
              <h5>New Staff? Register</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
