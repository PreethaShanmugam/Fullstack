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
import About from './Components/About';
import Conditions from './Components/Conditions';
import Contact from './Components/Contact';
import Performance from './Components/Performance';
import Staffprofile from './Components/Staffprofile';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Faq from './Components/Faq';
import Privacy from './Components/Privacy';
import Studentprofile2 from './Components/Studentprofile2';
import Addstudent from './Components/Addstudent';
import Addcourse from './Components/Addcourse';
import Studentcourse from './Components/Studentcourse';
import Myprofile from './Components/Myprofile';
import AssignmentPage from './Components/AssignmentPage';
import Question from './Components/Question';
import Attendance from './Components/Attendance';
import Grade from './Components/Grade';
import Sattendance from './Components/Sattendance';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/StaffSignup" element={<StaffSignup />} />
          <Route path="/StaffLogin" element={<StaffLogin />} />
          <Route path="/StudentLogin" element={<StudentLogin />} />
          <Route path="/Staff" element={<Staff />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Aboutt" element={<About />} />
          <Route path="/Terms" element={<Conditions/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/performance" element={<Performance/>} />
          <Route path="/Studentprofile" element={<Studentprofile/>} />
          <Route path="/Staffprofile" element={<Staffprofile/>} />
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/footer" element={<Footer/>} />
           <Route path="/faq" element={<Faq/>} />
           <Route path="/privacy" element={<Privacy/>} />
           <Route path="/profile2" element={<Studentprofile2/>} />
           <Route path="/Addstudent" element={<Addstudent/>} />
           <Route path="/course" element={<Courses/>} />
           <Route path="/addcourse" element={<Addcourse/>} />
           <Route path="/studentcourse" element={<Studentcourse/>} />
           <Route path="/myprofile" element={<Myprofile/>} />
           <Route path="/assign" element={<AssignmentPage/>} />
           <Route path="/assignq" element={<Question/>} />
           <Route path="/attendance" element={<Attendance/>} />
           <Route path="/grade" element={<Grade/>} />
           <Route path="/sattendance" element={<Sattendance/>} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
