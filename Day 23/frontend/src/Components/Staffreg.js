import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Admin from './Admin';
import './Staffreg.css';
import { useNavigate } from 'react-router-dom';

export default function Staffreg() {
  const [formData, setFormData] = useState({
    staffid: '',
    department: '',
    experience: '',
    mobile: '',
    stafftype: '',
    emailid: '',
    gender: '', // Assuming you want to include gender
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5050/staff/staffpost', formData)
      .then((response) => {
        // Handle success (e.g., show a success message)
        console.log('Registration successful:', response.data);
        alert("registered")
      })
      .catch((error) => {
        // Handle error (e.g., show an error message)
        console.error('Registration error:', error);
      });
  };
  
  return (
    <>
      <div>
        <Admin />
      </div>
      <div className="regg">
        <div className="container">
          <div className="title">Registration</div>
          <div className="content">
            <form onSubmit={handleSubmit}>
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Staff Id</span>
                  <input
                    type="text"
                    name="staffid"
                    placeholder="Enter Id"
                    required
                    value={formData.staffid}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Department</span>
                  <input
                    type="text"
                    name="department"
                    placeholder="Enter department"
                    required
                    value={formData.department}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Years Of Experience</span>
                  <input
                    type="text"
                    name="experience"
                    placeholder="Enter Year"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Enter number"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Staff Type</span>
                  <input
                    type="text"
                    name="stafftype"
                    placeholder="Assistant/Associate"
                    required
                    value={formData.stafftype}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="text"
                    name="emailid"
                    placeholder="Enter email"
                    required
                    value={formData.emailid}
                    onChange={handleChange}
                  />
                </div>
                <div className="gender-details">
                <input
                  type="radio"
                  name="gender"
                  id="dot-1"
                  value="Male"
                  onChange={handleChange}
                  checked={formData.gender === 'Male'}
                />
                </div>
                <input
                  type="radio"
                  name="gender"
                  id="dot-2"
                  value="Female"
                  onChange={handleChange}
                  checked={formData.gender === 'Female'}
                />
                <input
                  type="radio"
                  name="gender"
                  id="dot-3"
                  value="Other"
                  onChange={handleChange}
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
                <input type="submit" value="Register" />
              </div>
            </form>
          </div>
          </div>
      </div>
    </>
  );
}
