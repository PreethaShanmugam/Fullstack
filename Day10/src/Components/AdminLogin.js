import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/UserSlice";
import './AdminLogin.css';

const Login = () => {
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };

  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if username and password fields are filled
    if (!formdata.username || !formdata.password) {
      alert("Please enter both username and password.");
      return;
    }

    // Check if the password is at least 8 characters long
    if (formdata.password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // If all checks pass, navigate to the "/Admin" route and dispatch the login action
    nav("/dashboard");
    dispatch(
      login({
        username: formdata.username,
      })
    );
  };

  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div>
      <img
        src='https://c0.wallpaperflare.com/preview/722/962/382/learn-student-laptop-internet.jpg'
        height='650vh'
        width='1470vh'
        alt='img'
      />
      <form onSubmit={handleSubmit}>
        <div className="Adminmain">
          <h1 className="Admintitle">Admin Login</h1>
          <input
            type="text"
            name="username"
            className="Adminemail"
            placeholder="Email"
            value={formdata.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            className="Adminpassword"
            placeholder="password"
            value={formdata.password}
            onChange={handleChange}
          />
          <input className="Adminsubmit" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
