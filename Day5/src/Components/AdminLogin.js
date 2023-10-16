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
    nav("/Admin");
    dispatch(
      login({
        username: formdata.username,
      })
    );
  };
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div className="Adminimg">
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
        <input 
        className="Adminsubmit"
        type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;