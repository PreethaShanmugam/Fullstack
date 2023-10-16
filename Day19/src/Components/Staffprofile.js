import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Studentprofile.css';
import Admin from './Admin';

  const Staffprofile = () => {
    const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/staff/getAllstaff")
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
            
            <th>Email</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {details.map((student, index) => (
            <tr key={index}>
              
              <td>{student.email}</td>
              <td>{student.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };
  
  export default Staffprofile;  