import React, { useState } from 'react';
import './Login.css'; // Import your CSS file

function Login() {
//  const [selectedRole, setSelectedRole] = useState('');

//   const handleRoleChange = (e) => {
//     setSelectedRole(e.target.value);
//   };

//   const handleSubmit = () => {
//     // Handle the login logic here, using the selectedRole state value.
//     // You can send it to your server or manage authentication locally.
//   };

  return (
      <div className="form-group">
        <select>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
          <option value="student">Student</option>
        </select>
      </div>
  );
}

export default Login;


