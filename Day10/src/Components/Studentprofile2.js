
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
    mobileNumber: '123-456-7890',
    address: '123 Main St, City',
    sslc:'90%',
    higher:'90%',
    type:'GQ',
  },
  {
    name: 'Jane Smith',
    registerNumber: '67890',
    department: 'Electrical Engineering',
    gender: 'Female',
    mobileNumber: '987-654-3210',
    address: '456 Elm St, Town',
    sslc:'80%',
    higher:'70%',
    type:'MQ',
  },
  {
    name: 'Alice Johnson',
    registerNumber: '11111',
    department: 'Mechanical Engineering',
    gender: 'Female',
    mobileNumber: '555-555-5555',
    address: '789 Oak St, Village',
    sslc:'85%',
    higher:'75%',
    type:'MQ',
  },
  {
    name: 'Bob Williams',
    registerNumber: '22222',
    department: 'Civil Engineering',
    gender: 'Male',
    mobileNumber: '999-999-9999',
    address: '101 Pine St, Suburb',
    sslc:'95%',
    higher:'85%',
    type:'GQ',
  },
  {
    name: 'Eva Davis',
    registerNumber: '33333',
    department: 'Chemical Engineering',
    gender: 'Female',
    mobileNumber: '777-777-7777',
    address: '555 Maple St, Countryside',
    sslc:'88%',
    higher:'78%',
    type:'MQ',
  },
  {
    name: 'Chris Wilson',
    registerNumber: '44444',
    department: 'Information Technology',
    gender: 'Male',
    mobileNumber: '666-666-6666',
    address: '222 Cedar St, Town',
    sslc:'92%',
    higher:'82%',
    type:'GQ',
  },
  {
    name: 'Grace Lee',
    registerNumber: '55555',
    department: 'Aerospace Engineering',
    gender: 'Female',
    mobileNumber: '444-444-4444',
    address: '777 Birch St, Suburb',
    sslc:'89%',
    higher:'79%',
    type:'MQ',
  },
  {
    name: 'Daniel Brown',
    registerNumber: '66666',
    department: 'Computer Science',
    gender: 'Male',
    mobileNumber: '333-333-3333',
    address: '333 Spruce St, City',
    sslc:'91%',
    higher:'81%',
    type:'GQ',
  },
  // Add more student data here
];

const Studentprofile2 = () => {
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
          <th>Mobile Number</th>
          <th>Address</th>
          <th>SSLC percantange</th>
          <th>Higher Secondary percantage</th>
          <th>GQ/MQ</th>
          
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index}>
            <td>{student.name}</td>
            <td>{student.registerNumber}</td>
            <td>{student.department}</td>
            <td>{student.gender}</td>
            <td>{student.mobileNumber}</td>
            <td>{student.address}</td>
            <td>{student.sslc}</td>
            <td>{student.higher}</td>
            <td>{student.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default Studentprofile2;
