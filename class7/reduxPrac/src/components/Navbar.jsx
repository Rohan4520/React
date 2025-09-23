import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // CSS file import

function Navbar() {
  return (
    <div className="navbar">

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active-link" : "nav-link"
          }
        >
          Teacher Info
        </NavLink>

        <NavLink
          to="/student"
          className={({ isActive }) =>
            isActive ? "active-link" : "nav-link"
          }
        >
          Student Info
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
