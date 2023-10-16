import React, { useState } from 'react';
import './StaffSignup.css';
import Admin from './Admin';
// Import Layout


export default function Signup() {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [staffType, setStaffType] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = (e) => {
    e.preventDefault(); 
    if (
      name.length === 0 ||
      department.length === 0 ||
      staffType.length === 0 ||
      mobile.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      alert('Please enter all fields');
    } else if (password.length < 8) {
      alert('Password should be at least eight characters long');
    } else if (mobile.length !== 10) {
      alert('Mobile number should have exactly 10 digits');
    } 
  };

  return (
    <div>
    <div><Admin/></div>
      <div className="Staffreg">
        <div className="regmain">
          <h1 className="regtitle">Add Staff</h1>
          <input
            className="Staffname"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="Staffdepartment"
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input
            className="Stafftype"
            type="text"
            placeholder="Assistant/Associate"
            value={staffType}
            onChange={(e) => setStaffType(e.target.value)}
          />
          <input
            className="Staffmobile"
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            className="regemail"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="regpassword"
            type="password"
            placeholder="Year of experience"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            onClick={authenticate}
            className="Staffregister"
            type="submit"
            value="Register"
          />
        </div>
      </div>
    </div>
  );
}
