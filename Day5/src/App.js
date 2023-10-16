import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import StaffSignup from './Components/StaffSignup';
import StaffLogin from './Components/StaffLogin';
import StudentLogin from './Components/StudentLogin';
import AdminLogin from './Components/AdminLogin';
import Layout from './Components/Layout';
import Admin from './Components/Admin';
import Staff from './Components/Staff';
import Student from './Components/Student';
import Studentprofile from './Components/Studentprofile';
import Courses from './Components/Courses';
import Exams from './Components/Exams';
import Grades from './Components/Grades';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/StaffSignup" element={<StaffSignup />} />
          <Route path="/StaffLogin" element={<StaffLogin />} />
          <Route path="/StudentLogin" element={<StudentLogin />} />
          <Route path="/Staff" element={<Staff />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Studentprofile" element={<Studentprofile />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Exams" element={<Exams />} />
          <Route path="/Grades" element={<Grades />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
