import React from 'react';
import './Dashboard.css'; // Import your CSS file
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';
import Admin from './Admin';


const Dashboard = () => {
  return (
    <div>
    
      <div><Admin/></div>
      <div className="container">
        <div className="box first-row-box">
          <img src="https://i.pinimg.com/736x/7e/71/9b/7e719be79d55353a3ce6551d704e43ca.jpg" alt="Student" />
          <p>Total Students</p>
          <p>500</p> {/* Replace with the actual number */}
        </div>
        <div className="box first-row-box">
          <img src="https://parspng.com/wp-content/uploads/2022/12/studentpng.parspng.com-9.png" alt="Staff" />
          <p>Male Students</p>
          <p>250</p> {/* Replace with a dummy number */}
        </div>
        <div className="box first-row-box">
          <img src="https://www.pngitem.com/pimgs/m/117-1176598_female-student-png-image-indian-college-student-png.png" alt="Staff" />
          <p>Female Students</p>
          <p>250</p> {/* Replace with a dummy number */}
        </div>
        <div className="box2">
          <img src="https://png.pngtree.com/png-vector/20190116/ourmid/pngtree-ai-source-file-business-person-office-staff-jobs-png-image_384224.jpg" alt="Staff" />
          <p>Total Staffs</p>
          <p>50</p> {/* Replace with a dummy number */}
        </div>
        <div className="box2">
          <img src="https://png.pngtree.com/png-vector/20190116/ourmid/pngtree-ai-source-file-business-person-office-staff-jobs-png-image_384224.jpg" alt="Staff" />
          <p>Teaching Staff</p>
          <p>40</p> {/* Replace with a dummy number */}
        </div>
        <div className="box2">
          <img src="https://png.pngtree.com/png-vector/20190116/ourmid/pngtree-ai-source-file-business-person-office-staff-jobs-png-image_384224.jpg" alt="Staff" />
          <p>Non Teaching Staff</p>
          <p>10</p> {/* Replace with a dummy number */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
