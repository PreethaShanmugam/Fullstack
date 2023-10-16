import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Studentprofile.css'; // Import the CSS file
import Student from './Student';


const students = [
  {
    name: 'John Doe',
    registerNumber: '12345',
    department: 'Computer Science',
    gender: 'Male',
    Attendance: 'Present',
  },
  {
    name: 'Jane Smith',
    registerNumber: '67890',
    department: 'Electrical Engineering',
    gender: 'Female',
    Attendance: 'Present',
    
  },
  {
    name: 'Alice Johnson',
    registerNumber: '11111',
    department: 'Mechanical Engineering',
    gender: 'Female',
    Attendance: 'Present',
  },
  {
    name: 'Bob Williams',
    registerNumber: '22222',
    department: 'Civil Engineering',
    gender: 'Male',
    Attendance: 'Present',
  },
  {
    name: 'Eva Davis',
    registerNumber: '33333',
    department: 'Chemical Engineering',
    gender: 'Female',
    Attendance: 'Present',
  },
  {
    name: 'Chris Wilson',
    registerNumber: '44444',
    department: 'Information Technology',
    gender: 'Male',
    Attendance: 'Present',
  },
  {
    name: 'Grace Lee',
    registerNumber: '55555',
    department: 'Aerospace Engineering',
    gender: 'Female',
    Attendance: 'Present',
  },
  {
    name: 'Daniel Brown',
    registerNumber: '66666',
    department: 'Computer Science',
    gender: 'Male',
    Attendance: 'Present',
  },
  // Add more student data here
];

const Sattendance = () => {
  

  return (
    <div>
    <div><Student/></div>
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Register Number</th>
          <th>Department</th>
          <th>Gender</th>
          <th>Attendance</th>
          
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.registerNumber}</td>
            <td>{student.department}</td>
            <td>{student.gender}</td>
            <td>{student.Attendance}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Sattendance;
