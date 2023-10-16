import React from 'react'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebarbody'>
    <>
  {/* Coding By CodingNepal - www.codingnepalweb.com */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Glassmorphism Sidebar HTML and CSS| CodingNepal</title>
  {/* Linking Google font link for icons */}
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <link rel="stylesheet" href="style.css" />
  <aside className="sidebar">
    <div className="logo">
      <img src="images/logo.jpg" alt="logo" />
      <h2>CodingNepal</h2>
    </div>
    <ul className="links">
      <h4>Main Menu</h4>
      <li>
        <span className="material-symbols-outlined">dashboard</span>
        <a href="#">Dashboard</a>
      </li>
      <li>
        <span className="material-symbols-outlined">show_chart</span>
        <a href="#">Revenue</a>
      </li>
      <li>
        <span className="material-symbols-outlined">flag</span>
        <a href="#">Reports</a>
      </li>
      <hr />
      <h4>Advanced</h4>
      <li>
        <span className="material-symbols-outlined">person</span>
        <a href="#">Designer</a>
      </li>
      <li>
        <span className="material-symbols-outlined">group</span>
        <a href="#">Developer </a>
      </li>
      <li>
        <span className="material-symbols-outlined">ambient_screen</span>
        <a href="#">Magic Build</a>
      </li>
      <li>
        <span className="material-symbols-outlined">pacemaker</span>
        <a href="#">Theme Maker</a>
      </li>
      <li>
        <span className="material-symbols-outlined">monitoring</span>
        <a href="#">Analytic</a>
      </li>
      <hr />
      <h4>Account</h4>
      <li>
        <span className="material-symbols-outlined">bar_chart</span>
        <a href="#">Overview</a>
      </li>
      <li>
        <span className="material-symbols-outlined">mail</span>
        <a href="#">Message</a>
      </li>
      <li>
        <span className="material-symbols-outlined">settings</span>
        <a href="#">Settings</a>
      </li>
      <li className="logout-link">
        <span className="material-symbols-outlined">logout</span>
        <a href="#">Logout</a>
      </li>
    </ul>
  </aside>
</>

    </div>
  )
}
