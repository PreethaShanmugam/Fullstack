import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Staff  from './Staff';
import { useNavigate } from 'react-router-dom';

export default function Stureg() {
  const [formData, setFormData] = useState({
    registernumber: '',
    department: '',
    section: '',
    mobile: '',
    admissiontype: '',
    emailid: '',
    gender: 'Male', // Default to Male
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registered Succesfully")
    axios
      .post('http://localhost:5052/student/signupstudent', formData)
      .then((response) => {
        // Handle a successful response, e.g., show a success message or redirect
        console.log('Registration successful:', response);
      })
      .catch((error) => {
        // Handle any errors, e.g., show an error message
        console.error('Registration error:', error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  

  return (
    <>
      <div>
        <Staff />
      </div>
      <div className="regg">
        <div className="container">
          <div className="title">Registration</div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Register Number</span>
                  <input
                    type="text"
                    placeholder="Enter number"
                    name="registernumber"
                    value={formData.registernumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Department</span>
                  <input
                    type="text"
                    placeholder="Enter department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Section</span>
                  <input
                    type="text"
                    placeholder="Enter Section"
                    name="section"
                    value={formData.section}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    placeholder="Enter number"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Admission Type</span>
                  <input
                    type="text"
                    placeholder="GQ/MQ"
                    name="admissiontype"
                    value={formData.admissiontype}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    placeholder="Enter email"
                    name="emailid"
                    value={formData.emailid}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="gender-details">
                <input
                  type="radio"
                  name="gender"
                  id="dot-1"
                  value="Male"
                  onChange={handleInputChange}
                  checked={formData.gender === 'Male'}
                />
                <input
                  type="radio"
                  name="gender"
                  id="dot-2"
                  value="Female"
                  onChange={handleInputChange}
                  checked={formData.gender === 'Female'}
                />
                <input
                  type="radio"
                  name="gender"
                  id="dot-3"
                  value="Other"
                  onChange={handleInputChange}
                  checked={formData.gender === 'Other'}
                />
                <span className="gender-title">Gender</span>
                <div className="category">
                  <label htmlFor="dot-1">
                    <span className="dot one" />
                    <span className="gender">Male</span>
                  </label>
                  <label htmlFor="dot-2">
                    <span className="dot two" />
                    <span className="gender">Female</span>
                  </label>
                  <label htmlFor="dot-3">
                    <span className="dot three" />
                    <span className="gender">Other</span>
                  </label>
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Register" onClick={handleSubmit} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
