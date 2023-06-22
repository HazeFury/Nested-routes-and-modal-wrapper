import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <div className="link-box">
        <NavLink to="/">
          <button className="nav-btn" type="button">
            Home
          </button>
        </NavLink>
        <NavLink to="/about">
          <button className="nav-btn" type="button">
            About
          </button>
        </NavLink>
        <NavLink to="/dashboard">
          <button className="nav-btn" type="button">
            Dashboard
          </button>
        </NavLink>
      </div>
    </div>
  );
}
