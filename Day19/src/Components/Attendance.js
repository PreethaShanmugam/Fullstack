import React, { useState } from 'react';
import './Studentprofile.css'; // Import the CSS file
import Staff from './Staff';

const students = [
  {
    name: 'John Doe',
    registerNumber: '12345',
    department: 'Computer Science',
    Attendance: 'Present',
  },
  {
    name: 'Jane Smith',
    registerNumber: '67890',
    department: 'Electrical Engineering',
    Attendance: 'Present',
    
  },
];

const Attendance = () => {
  const [studentData, setStudentData] = useState(students);

  const toggleAttendance = (index) => {
    // Create a copy of the student data
    const updatedStudentData = [...studentData];
    // Toggle the attendance for the clicked student
    updatedStudentData[index].Attendance =
      updatedStudentData[index].Attendance === 'Present'
        ? 'Absent'
        : 'Present';
    // Update the state with the modified data
    setStudentData(updatedStudentData);
  };

  return (
    <div>
      <div>
        <Staff />
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Register Number</th>
            <th>Department</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.registerNumber}</td>
              <td>{student.department}</td>
              <td>
                <button onClick={() => toggleAttendance(index)}>
                  {student.Attendance}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
