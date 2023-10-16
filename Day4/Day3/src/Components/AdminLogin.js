import React, { useState } from 'react';
import './AdminLogin.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = (e) => {
    e.preventDefault(); 
    if (email.length === 0 || password.length === 0) {
      alert('Please enter all fields');
    } else if (password.length < 8) {
      alert('Password should be at least eight characters long');
    } else {

    }
  };

  return (
    <div>
      <div className="Adminimg">
        <div className="Adminmain">
          <h1 className="Admintitle">Admin Login</h1>
          <input
            className="Adminemail"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="Adminpassword"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            onClick={authenticate}
            className="Adminsubmit"
            type="submit"
            value="Login"
          />
        </div>
      </div>
    </div>
  );
}
