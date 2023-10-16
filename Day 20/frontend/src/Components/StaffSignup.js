import React, { useState,useEffect } from 'react';
import './StaffSignup.css';
import Admin from './Admin';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  

  const [staffid, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [stafftype, setStaffType] = useState('');
  const [name, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const sendtodb = (e) => {
    e.preventDefault();
  
    // Set a hardcoded role (e.g., "Staff" or any other role)
    const hardcodedRole = "STAFF";
  
    const Staffdetails = {
      staffid,
      department,
      stafftype,
      name,
      email,
      password,
      role: hardcodedRole, // Include the hardcoded role
    };
  
    if (
      name.length === 0 ||
      department.length === 0 ||
      stafftype.length === 0 ||
      staffid.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      alert("Enter All fields");
    } else {
      fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Staffdetails),
      })
        .then(() => {
          console.log("New Detail Added");
          console.log(JSON.stringify(Staffdetails));
          console.log(e);
          alert("Registered");
        });
    }
  }
  return (
    <div>
    <div><Admin/></div>
      <div className="Staffreg">
        <div className="regmain">
          <h1 className="regtitle">Add Staff</h1>
          <input
            className="Staffname"
            type="text"
            placeholder="Staffid"
            value={staffid}
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
            value={stafftype}
            onChange={(e) => setStaffType(e.target.value)}
          />
          <input
            className="Staffmobile"
            type="text"
            placeholder="Name"
            value={name}
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
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            onClick={sendtodb}
            className="Staffregister"
            type="submit"
            value="Register"
          />
        </div>
      </div>
    </div>
  );
}
