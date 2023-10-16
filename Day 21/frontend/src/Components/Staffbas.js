import React, { useState,useEffect } from 'react';
import './Staffbas.css';
import Admin from './Admin';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios
import { useNavigate } from 'react-router-dom';

export default function Staffbas() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const data = {
      email,
      password,
      name,
      role,
    };

    // Send a POST request to the back-end
    axios.post('http://localhost:5057/auth/register', data)
      .then((response) => {
        // Handle success, e.g., show a success message or redirect
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        // Handle errors, e.g., display an error message
        console.error('Error:', error);
      });
  };
  
  return (
    <>
      <div><Admin /></div>
      <div className="reggg">
        <div className="containerr">
          <div className="titlee">Registration</div>
          <div className="contentt">
            <form onSubmit={handleSubmit}>
              <div className="user-detailss">
                <div className="input-boxx">
                  <span className="detailss">Email</span>
                  <input
                    type="text"
                    placeholder="Enter email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-boxx">
                  <span className="detailss">Password</span>
                  <input
                    type="text"
                    placeholder="Enter password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-boxx">
                  <span className="detailss">Name</span>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input-boxx">
                  <span className="detailss">Role</span>
                  <input
                    type="text"
                    placeholder="Enter Role"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
              </div>
              <Link to='/reg'>
              <div className="buttonn">
                <input type="submit" value="Next" />
              </div>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
