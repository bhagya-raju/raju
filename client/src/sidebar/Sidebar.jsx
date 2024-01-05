import React, { useEffect } from 'react';
import "./sidebar.css";
import logo from "../images/logo.png";
import overView from "../images/overview.svg";
import analytics from "../images/analytics.svg";
import heatMap from "../images/heatmap.svg";
import report from "../images/report.svg";
import support from "../images/support.svg";
import logOut from "../images/logout.svg";

const menuItems = [
  { icon: overView, label: "Overview" },
  { icon: analytics, label: "Analytics" },
  { icon: heatMap, label: "Heatmap" },
  { icon: report, label: "Report" },
  { icon: support, label: "Support" },
];

const Sidebar = () => {
  
  return (
    <div className="app">
      <div className="side-bar">
        <div className="logo">
          <img src={logo} alt="" className="quant" height="100%" width="100%" />
        </div>
        <div className="line"></div>

        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`image-container ${
              item.label === "Report" ? "report-item" : ""
            }`}
          >
            <img
              src={item.icon}
              alt=""
              height="25px"
              width="25px"
              className="white-image"
            />
            <div className="nav-route">{item.label}</div>
          </div>
        ))}

        <div className="logout">
          <img
            src={logOut}
            alt=""
            height="25px"
            width="25px"
            className="white-image"
          />
          <div className="nav-route">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;