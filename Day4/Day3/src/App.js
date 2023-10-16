
import './App.css';
import Login from './Components/StudentLogin';
import StaffLogin from './Components/StaffLogin'; 
import AdminLogin from './Components/AdminLogin';
import StaffSignup from './Components/StaffSignup';
import HomePage from './Components/HomePage';
import  {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<HomePage/>}/>
   <Route path="/StaffSignup" element={<StaffSignup/>}/>
   <Route path="/StaffLogin" element={<StaffLogin/>}/>
   <Route path="/StudentLogin" element={<Login/>}/>
   <Route path="/AdminLogin" element={<AdminLogin/>}/>
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
