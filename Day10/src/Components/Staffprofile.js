import React from 'react';
import './Studentprofile.css';
import Admin from './Admin';
const students = [
    {
      name: 'John Doe',
      department: 'Computer Science',
      experience: '5 years',
      position: 'Assistant',
      mobileNumber: '123-456-7890',
      email: 'john.doe@example.com',
    },
    {
      name: 'Jane Smith',
      department: 'Electrical Engineering',
      experience: '3 years',
      position: 'Associate',
      mobileNumber: '987-654-3210',
      email: 'jane.smith@example.com',
    },
    {
      name: 'Alice Johnson',
      department: 'Mechanical Engineering',
      experience: '7 years',
      position: 'Assistant',
      mobileNumber: '555-555-5555',
      email: 'alice.johnson@example.com',
    },
    {
      name: 'Bob Williams',
      department: 'Civil Engineering',
      experience: '4 years',
      position: 'Associate',
      mobileNumber: '999-999-9999',
      email: 'bob.williams@example.com',
    },
    {
      name: 'Eva Davis',
      department: 'Chemical Engineering',
      experience: '6 years',
      position: 'Assistant',
      mobileNumber: '777-777-7777',
      email: 'eva.davis@example.com',
    },
    {
      name: 'Chris Wilson',
      department: 'Information Technology',
      experience: '2 years',
      position: 'Associate',
      mobileNumber: '666-666-6666',
      email: 'chris.wilson@example.com',
    },
    // Add more student data here
    {
      name: 'Grace Lee',
      department: 'Aerospace Engineering',
      experience: '8 years',
      position: 'Assistant',
      mobileNumber: '444-444-4444',
      email: 'grace.lee@example.com',
    },
    {
      name: 'Daniel Brown',
      department: 'Computer Science',
      experience: '4 years',
      position: 'Associate',
      mobileNumber: '333-333-3333',
      email: 'daniel.brown@example.com',
    },
    {
      name: 'Linda Johnson',
      department: 'Electrical Engineering',
      experience: '6 years',
      position: 'Assistant',
      mobileNumber: '222-222-2222',
      email: 'linda.johnson@example.com',
    },
    {
      name: 'Mike Smith',
      department: 'Mechanical Engineering',
      experience: '5 years',
      position: 'Associate',
      mobileNumber: '111-111-1111',
      email: 'mike.smith@example.com',
    },
    {
      name: 'Emily Davis',
      department: 'Chemical Engineering',
      experience: '3 years',
      position: 'Assistant',
      mobileNumber: '999-999-9999',
      email: 'emily.davis@example.com',
    },
    {
      name: 'Tom Wilson',
      department: 'Information Technology',
      experience: '2 years',
      position: 'Associate',
      mobileNumber: '777-777-7777',
      email: 'tom.wilson@example.com',
    },
  ];
  const Staffprofile = () => {
    return (
        <div>
        <div><Admin/></div>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Year of Experience</th>
            <th>Position (Assistant/Associate)</th>
            <th>Mobile Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.department}</td>
              <td>{student.experience}</td>
              <td>{student.position}</td>
              <td>{student.mobileNumber}</td>
              <td>{student.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };
  
  export default Staffprofile;  