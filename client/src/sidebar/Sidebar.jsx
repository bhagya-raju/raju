import "./sidebar.css";
import React from "react";
import logo from "../images/logo.png";
import overView from "../images/overview.svg";
import analytics from "../images/analytics.svg";
import heatMap from "../images/heatmap.svg";
import report from "../images/report.svg";
import support from "../images/support.svg";
// import report from "./images/report.png";
import logOut from "../images/logout.svg";


const Sidebar = () => {
  return (
    <div className="app">
      <div className="side-bar">
      <div className="logo">
          <img
            src={logo}
            alt=""
            height="100%"
            width="100%"
          />
        </div>
        <div className="line"></div>

        <div className="image-container">
          <img
            src={overView}
            alt=""
            height="25px"
            width="25px"
            className="white-image"
          />
          <div className="nav-route">Overview</div>
        </div>
        <div className="image-container">
          <img
            src={analytics}
            alt=""
            height="25px"
            width="25px"
            className="white-image"
          />
          <div className="nav-route">Alalytics</div>
                  </div>
        <div className="image-container">
          <img
            src={heatMap}
            alt=""
            height="25px"
            width="25px"
            className="white-image"
          />
          <div className="nav-route">Heatmap</div>
        </div>
        <div className="image-container">
        <img
          src={report}
          alt=""
          height="25px"
          width="25px"
          className="white-image"
        />
        <div className="nav-route">Report</div>
      </div>
        <div className="image-container">
        <img
          src={support}
          alt=""
          height="25px"
          width="25px"
          className="white-image"
        />
        <div className="nav-route">Support</div>
      </div>
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
