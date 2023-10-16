
import React from 'react';
import './Studentprofile.css'; // Import the CSS file
import Staff from './Staff';
// ... (Rest of the component remains the same)

const students = [
  {
    name: 'John Doe',
    registerNumber: '12345',
    department: 'Computer Science',
    grade: 'A',
  },
  {
    name: 'Jane Smith',
    registerNumber: '67890',
    department: 'Electrical Engineering',
    grade: 'C',
    
  },
  {
    name: 'Alice Johnson',
    registerNumber: '11111',
    department: 'Mechanical Engineering',
    grade: 'A',
  },
  {
    name: 'Bob Williams',
    registerNumber: '22222',
    department: 'Civil Engineering',
    grade: 'A',
  },
  {
    name: 'Eva Davis',
    registerNumber: '33333',
    department: 'Chemical Engineering',
    grade: 'C',
  },
  {
    name: 'Chris Wilson',
    registerNumber: '44444',
    department: 'Information Technology',
    grade: 'A',
  },
  {
    name: 'Grace Lee',
    registerNumber: '55555',
    department: 'Aerospace Engineering',
    grade: 'B',
  },
  {
    name: 'Daniel Brown',
    registerNumber: '66666',
    department: 'Computer Science',
    grade: 'A',
  },
  // Add more student data here
];

const Grade = () => {
  return (
    <div>
    <div><Staff/></div>
    <table className="student-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Register Number</th>
          <th>Department</th>
          <th>Grade</th>
          
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.registerNumber}</td>
            <td>{student.department}</td>
            <td>{student.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Grade;
