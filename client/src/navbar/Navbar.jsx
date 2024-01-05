import React from "react";
import "./navbar.css";
import notification from "../images/notification.svg";
import profile from "../images/prof-bg.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-left">
          <div className="navbar-text">Hi, John doe</div>
        </div>
        <div>
          <div className="nav-right">
            <div className="notification">
              <img src={notification} alt="" />
            </div>
            <div className="notification">
              <img src={profile} className="profile-img" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="label">Reports</div>
    </div>
  );
};

export default Navbar;