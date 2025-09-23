import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styles
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <NavLink exact="true" to="/" className="nav-link" activeclassname="active">
            Teacher
          </NavLink>
        </li>
        <li>
          <NavLink to="/student" className="nav-link" activeclassname="active">
            Student
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;