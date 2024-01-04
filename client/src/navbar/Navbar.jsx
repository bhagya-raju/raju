import React from "react";
import "./navbar.css";
import notification from "../images/notification.svg";
import profile from "../images/profile.svg";
const Navbar = () => {
  return (
    <div>
    <div className="navbar">
      <div className="nav">
        <div className="navbar-text">Hi, John doe</div>

 
        <div>
        <div className="notification">
          <img src={notification} alt="" />
        </div>
        <div className="notification">
          <img src={profile} alt="" />
        </div>
        </div>
      </div>
    </div>
    <div className="label">Reports</div>
    </div>
  );
};

export default Navbar;
