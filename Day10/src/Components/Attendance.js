
import React from 'react';
import './Studentprofile.css'; // Import the CSS file
import Staff from './Staff';
// ... (Rest of the component remains the same)

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

const Attendance = () => {
  return (
    <div>
    <div><Staff/></div>
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

export default Attendance;
