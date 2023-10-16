import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/UserSlice";
import './AdminLogin.css';
import axios from 'axios';



const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const validate = (e) => {
    e.preventDefault();
    const errors = {};
  
    if (email.length === 0) {
      errors.email = 'Email is required';
    }
  
    if (password.length === 0) {
      errors.password = 'Password is required';
    }
  
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        email: '',
        password: '',
      });
  
      const userCredentials = {
        email: email,
        password: password,
      };
  
      axios.post("http://localhost:5057/auth/login", userCredentials)
        .then(response => {
          try {
            const token = response.data.token;
            if (token) {
              localStorage.setItem('token', token);
              localStorage.setItem('email', userCredentials.email);
              const userType = response.data.role;
              localStorage.setItem('userType', userType);
              if (userType === "STUDENT") {
                nav("/myprofile");
              } else if (userType === "STAFF") {
                nav('/profile2');
              } else if (userType === "ADMIN") {
                nav('/dashboard');
              } else {
                alert("Invalid user role");
              }
            } else {
              alert("Invalid token. Please try again.");
            }
          } catch (error) {
            console.error("Error processing response:", error);
          }
        })
        .catch(error => {
          alert(error.response.data);
        });
    }
  };
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };

  return (
    <>
    <div>
      <img
        src='https://c0.wallpaperflare.com/preview/722/962/382/learn-student-laptop-internet.jpg'
        height='650vh'
        width='1470vh'
        alt='img'
      />
      <form >
      <div className="Adminmain">
      <h1 className="Admintitle">Login</h1>
        <input
          type="text"
          name="email"
          className="Adminemail"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
        <input
          type="password"
          name="password"
          className="Adminpassword"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        {formErrors.password && <p className="error">{formErrors.password}</p>}
        <input 
        onClick={validate}
        className="Adminsubmit"
        type="submit" />
        </div>
      </form>
    </div>
    </>
  );
};

export default Login;