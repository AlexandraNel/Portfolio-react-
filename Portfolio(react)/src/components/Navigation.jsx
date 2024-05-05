import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

export default function Navigation({ logo }) {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            to="/Home"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            {logo}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Portfolio"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Resume"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "active" : "nav-link")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  logo: PropTypes.element.isRequired, // Ensures the logo is always a React element
};
