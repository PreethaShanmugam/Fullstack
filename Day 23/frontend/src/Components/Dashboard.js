import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMale, faFemale, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Admin from './Admin';

const Dashboard = () => {
  const nav=useNavigate();
  const token=localStorage.getItem("token")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);

  return (
    <div>
    <div><Admin/></div>
      <div className="container">
        <div className="box first-row-box blue">
          <FontAwesomeIcon icon={faUser} size="3x" />
          <p>Total Students</p>
          <p>500</p> {/* Replace with the actual number */}
        </div>
        <div className="box first-row-box green">
          <FontAwesomeIcon icon={faMale} size="3x" />
          <p>Male Students</p>
          <p>250</p> {/* Replace with a dummy number */}
        </div>
        <div className="box first-row-box pink">
          <FontAwesomeIcon icon={faFemale} size="3x" />
          <p>Female Students</p>
          <p>250</p> {/* Replace with a dummy number */}
        </div>
        <div className="box2 blue">
          <FontAwesomeIcon icon={faUserTie} size="3x" />
          <p>Total Staffs</p>
          <p>50</p> {/* Replace with a dummy number */}
        </div>
        <div className="box2 green">
          <FontAwesomeIcon icon={faUserTie} size="3x" />
          <p>Teaching Staff</p>
          <p>40</p> {/* Replace with a dummy number */}
        </div>
        <div className="box2 pink">
          <FontAwesomeIcon icon={faUserTie} size="3x" />
          <p>Non Teaching Staff</p>
          <p>10</p> {/* Replace with a dummy number */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
