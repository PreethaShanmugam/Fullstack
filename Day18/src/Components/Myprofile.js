import React from 'react';
import './Myprofile.css';
import Student from './Student';
export default function Myprofile() {
  return (
    <>
    
    
    <div><Student/></div>
    <div className='my-profile-container'>
      <div className='profile-image'>
        <img
          src='https://i.pinimg.com/736x/7e/71/9b/7e719be79d55353a3ce6551d704e43ca.jpg'
          alt='Profile'
        />
      </div>
      <div className='profile-details'>
        <p><span className='bold-text'>Name:</span>John Doe</p><br/>
        <p><span className='bold-text'>Department:</span> Computer Science</p><br/>
        <p><span className='bold-text'>Section:</span> A</p><br/>
        <p><span className='bold-text'>Mobile:</span> 123-456-7890</p><br/>
        <p><span className='bold-text'>email:</span>johndoe@skct.edu.in</p><br/>
      </div>
    </div>
    </>
  );
}
