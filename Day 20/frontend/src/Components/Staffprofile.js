import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Studentprofile.css';
import Admin from './Admin';
import { useNavigate } from 'react-router-dom';

  const Staffprofile = () => {


  const nav=useNavigate();
    const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/staff/getAllstaff")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
 


    return (
        <div>
        <div><Admin/></div>
      <table className="student-table">
        <thead>
          <tr>
            
          <th>StaffId</th>
          <th>Department</th>
            <th>Experience</th>
            <th>Mobile Number</th>
            <th>Staff Type</th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {details.map((student, index) => (
            <tr key={index}>
              
            <td>{student.staffid}</td>
            <td>{student.department}</td>
            <td>{student.experience}</td>
            <td>{student.mobile}</td>
            <td>{student.stafftype}</td>
            <td>{student.emailid}</td>
            <td>{student.gender}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };
  
  export default Staffprofile;  