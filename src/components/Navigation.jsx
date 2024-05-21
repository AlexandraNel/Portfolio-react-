import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

export default function Navigation({ logo }) {
  return (
    <nav className="nav">
      <div className="logo">
        {logo}
      </div>
      
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        About
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        Resume
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "nav-link")}
      >
        Contact
      </NavLink>
    </nav>
  );
}

Navigation.propTypes = {
  logo: PropTypes.element.isRequired, // Ensures the logo is always a React element
};
