import "./DashNav.css";
import { NavLink } from "react-router-dom";

export default function DashNav() {
  return (
    <div className="dashnav-container">
      <div className="dash-link-box">
        <NavLink to="">
          <button className="dash-nav-btn" type="button">
            Item 0
          </button>
        </NavLink>
        <NavLink to="first-item">
          <button className="dash-nav-btn" type="button">
            Item 1
          </button>
        </NavLink>
        <NavLink to="second-item">
          <button className="dash-nav-btn" type="button">
            Item 2
          </button>
        </NavLink>
        <NavLink to="third-item">
          <button className="dash-nav-btn" type="button">
            Item 3
          </button>
        </NavLink>
        <NavLink to="fourth-item">
          <button className="dash-nav-btn" type="button">
            Item 4
          </button>
        </NavLink>
      </div>
    </div>
  );
}
