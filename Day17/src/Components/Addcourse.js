import React, { useState } from 'react';
import axios from 'axios';
import './Addcourse.css';
import Staff from './Staff';

export default function AddCourse() {
  const [formData, setFormData] = useState({
    coursename: '',
    coursecode: '',
    courseid: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your Spring Boot API endpoint
      const response = await axios.post('http://localhost:5055/course/signupcourse', formData);

      // Handle the response, e.g., show a success message
      console.log('Course created successfully:', response.data);
      alert('Course created successfully');
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error('Error creating course:', error);
      alert('Error creating course');
    }
  };

  return (
    <>
      <div><Staff /></div>
      <div className='add-course-container'>
        <h2 className='add-course-title'>Add Course</h2>
        <form className='add-course-form'>
          <div className='form-group'>
            <label htmlFor='coursename' className='form-label'>
              Course Name
            </label>
            <input
              type='text'
              name='coursename'
              placeholder='Enter Course Name'
              value={formData.coursename}
              onChange={handleInputChange}
              className='form-input'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='coursecode' className='form-label'>
              Course Code
            </label>
            <input
              type='text'
              name='coursecode'
              placeholder='Enter Course Code'
              value={formData.coursecode}
              onChange={handleInputChange}
              className='form-input'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='courseid' className='form-label'>
              Course ID
            </label>
            <input
              type='text'
              name='courseid'
              placeholder='Course ID'
              value={formData.courseid}
              onChange={handleInputChange}
              className='form-input'
            />
          </div>
          <button type='submit' className='submit-button' onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
