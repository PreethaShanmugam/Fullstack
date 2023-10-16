// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { login } from "../Redux/UserSlice";
// import './AdminLogin.css';

// const Login = () => {
//   const handleChange = (e) => {
//     setFormdata({ ...formdata, [e.target.name]: e.target.value });
//   };

//   const [formdata, setFormdata] = useState({
//     username: "",
//     password: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if username and password fields are filled
//     if (!formdata.username || !formdata.password) {
//       alert("Please enter both username and password.");
//       return;
//     }

//     // Check if the password is at least 8 characters long
//     if (formdata.password.length < 8) {
//       alert("Password must be at least 8 characters long.");
//       return;
//     }

//     // If all checks pass, navigate to the "/Staff" route and dispatch the login action
//     nav("/profile2");
//     dispatch(
//       login({
//         username: formdata.username,
//       })
//     );
//   };

//   const dispatch = useDispatch();
//   const nav = useNavigate();

//   return (
//     <div>
//       <img
//         src='https://c0.wallpaperflare.com/preview/722/962/382/learn-student-laptop-internet.jpg'
//         height='650vh'
//         width='1470vh'
//         alt='img'
//       />
//       <form onSubmit={handleSubmit}>
//         <div className="Adminmain">
//           <h1 className="Admintitle">Staff Login</h1>
//           <input
//             type="text"
//             name="username"
//             className="Adminemail"
//             placeholder="Email"
//             value={formdata.username}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             name="password"
//             className="Adminpassword"
//             placeholder="Password"
//             value={formdata.password}
//             onChange={handleChange}
//           />
//           <input 
//             className="Adminsubmit"
//             type="submit"
//             value="Login"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../Redux/UserSlice";
import './AdminLogin.css';

const Login = () => {
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
    role: "STAFF", // Set the role as "staff"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if username and password fields are filled
    if (!formdata.username || !formdata.password) {
      alert("Please enter both username and password.");
      return;
    }

    // Check if the password is at least 8 characters long
    if (formdata.password.length < 3) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    try {
      // Make an API call to your server to log in (send username, password, and role)
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formdata.username,
          password: formdata.password,
          role: formdata.role, // Include the hardcoded role
        }),
      });

      if (response.ok) {
        // If login is successful, extract the JWT token from the response
        const data = await response.json();
        const token = data.token;
        const role=data.role;

        // Store the token in local storage
        localStorage.setItem('token', token);
        localStorage.setItem('role',role);

        // Dispatch the login action
        dispatch(login({
          username: formdata.username,
        }));

        if(role=='STAFF')
        nav("/profile2");
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
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
          <h1 className="Admintitle">Staff Login</h1>
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
            placeholder="Password"
            value={formdata.password}
            onChange={handleChange}
          />
          <input 
            className="Adminsubmit"
            type="submit"
            value="Login"
          />
        </div>
      </form>
    </div>
  );
};

export default Login;

