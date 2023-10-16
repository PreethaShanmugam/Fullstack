import React, { useState } from 'react';
import './Addcourse.css';
import Staff from './Staff';

export default function Addcourse() {

  return (
    <>
    <div><Staff/></div>
    <div className='add-course-container'>
      <h2 className='add-course-title'>Add Course</h2>
      <form className='add-course-form'>
        <div className='form-group'>
          <label htmlFor='courseName' className='form-label'>
            Course Name
          </label>
          <input
            type='text'
            id='courseName'
            name='courseName'
            placeholder='Enter Course Name'
           
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='courseCode' className='form-label'>
            Course Code
          </label>
          <input
            type='text'
            id='courseCode'
            name='courseCode'
            placeholder='Enter Course Code'
            className='form-input'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='staff' className='form-label'>
            Staff
          </label>
          <input
            type='text'
            id='staff'
            name='staff'
            placeholder='Enter Staff Name'
            className='form-input'
          />
        </div>
        <button type='submit' className='submit-button'>
          Submit
        </button>
      </form>
    </div>
    </>
  );
}
