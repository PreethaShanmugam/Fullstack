import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Studentprofile.css';
import Admin from './Admin';

const Studentprofile = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5052/student/getAllstudent")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div><Admin /></div>
      <table className="student-table">
        <thead>
          <tr>
          <th>Register Number</th>
          <th>Name</th>
            <th>Email</th>
            <th>password</th>
            <th>Department</th>
            <th>Gender</th>
            
          </tr>
        </thead>
        <tbody>
          {details.map((student, index) => (
            <tr key={index}>
              <td>{student.rollno}</td>
              <td>{student.username}</td>
              <td>{student.emailid}</td>
              <td>{student.password}</td>
              <td>{student.department}</td>
              <td>{student.gender}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studentprofile;
