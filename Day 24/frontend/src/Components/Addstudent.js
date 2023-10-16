import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StaffSignup.css';
import Staff from './Staff';
// Import Layout


export default function Addstudent() {
  const [rollno, setroll] = useState('');
  const [username, setusername] = useState('');
  const [emailid, setemailid] = useState('');
  const [password, setpassword] = useState('');
  const [department, setdepartment] = useState('');
  const [gender, setgender] = useState('');

  const sendtodb=(e)=>{
    e.preventDefault()
    const Staffdetails={rollno,department,gender,username,emailid,password}
    if(username.length===0||department.length===0||gender.length===0||rollno.length===0||emailid.length===0||password.length===0){
      alert("Enter All fields")
    }
    else{
      fetch("http://localhost:5052/student/signupstudent",
      {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(Staffdetails)
      }
      ).then(()=>{
        console.log("New Detail Added");   
        console.log(JSON.stringify(Staffdetails));
        console.log(e);
        alert("Registered")
        
      })
    }
  }
  


  return (
    <div>
    <div><Staff/></div>
      <div className="Staffreg">
        <div className="regmain">
          <h1 className="regtitle">Add Student</h1>
          <input
            className="Staffname"
            type="text"
            placeholder="Register number"
            value={rollno}
            onChange={(e) => setroll(e.target.value)}
          />
          <input
            className="Staffdepartment"
            type="text"
            placeholder="Name"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          <input
            className="Stafftype"
            type="email"
            placeholder="Emailid"
            value={emailid}
            onChange={(e) => setemailid(e.target.value)}
          />
          <input
            className="Staffmobile"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input
            className="regemail"
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) => setdepartment(e.target.value)}
          />
          <input
            className="regpassword"
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e) => setgender(e.target.value)}
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
