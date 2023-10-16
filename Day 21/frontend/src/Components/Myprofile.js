import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Student from './Student';
import './Myprofile.css';
import { Link,useNavigate } from 'react-router-dom';

export default function Myprofile() {
  const [studentData, setStudentData] = useState({});
  const [loading, setLoading] = useState(true);
  const nav=useNavigate();

  // Fetch the email ID from local storage
  const email = localStorage.getItem('email');

  const token=localStorage.getItem("token")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);
  
 


  useEffect(() => {
    if (email) {
      // Make an API request to fetch student details
      axios
        .get(`http://localhost:5052/student/getstudent/${email}`) // Replace with your actual API endpoint
        .then((response) => {
          setStudentData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching student data:', error);
          setLoading(false);
        });
    }
  }, [email]);

  return (
    <>
      <div>
        <Student />
      </div>
      <div className="side_wrapper">
        <section className="about-dev">
          <header className="profile-card_header">
            <div className="profile-card_header-container">
              <div className="profile-card_header-imgbox">
                <img
                  src="https://i.pinimg.com/originals/73/b1/d2/73b1d221c14a2a6e8275da6b1299aaaf.jpg"
                  alt="Student Profile"
                />
              </div>
              <h1>
           Sri Krishna College Of Technology<span>Batch 2021-2025</span>
          </h1>
            </div>
          </header>
          <div className="profile-card_about">
            <h2>All About Me</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <p>
                <p>
                  <span className="bold-text">Register Number:</span>
                  {studentData.registernumber}
                </p>
                <p>
                  <span className="bold-text">Department:</span>
                  {studentData.department}
                </p>
                <p>
                  <span className="bold-text">Section:</span>
                  {studentData.section}
                </p>
                <p>
                  <span className="bold-text">Mobile:</span>
                  {studentData.mobile}
                </p>
                <p>
                  <span className="bold-text">Email:</span>
                  {studentData.emailid}
                </p>
                
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
