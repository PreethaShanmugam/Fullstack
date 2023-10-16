import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Studentprofile.css';
import Staff from './Staff';
import { useNavigate } from 'react-router-dom';

const Studentprofile2 = () => {
  const [details, setDetails] = useState([]);
  const nav=useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5052/student/getAllstudent")
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  
  const token=localStorage.getItem("token")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);

  return (
    <div>
      <div><Staff /></div>
      <table className="student-table">
        <thead>
          <tr>
          <th>Register Number</th>
          <th>department</th>
            <th>Section</th>
            <th>Mobile Number</th>
            <th>Admission Type</th>
            <th>Email</th>
            <th>Gender</th>
            
          </tr>
        </thead>
        <tbody>
          {details.map((student, index) => (
            <tr key={index}>
              <td>{student.registernumber}</td>
              <td>{student.department}</td>
              <td>{student.section}</td>
              <td>{student.mobile}</td>
              <td>{student.admissiontype}</td>
              <td>{student.emailid}</td>
              <td>{student.gender}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Studentprofile2;
