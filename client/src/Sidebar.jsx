import "./sidebar.css";
import React from "react";
import logo from "./images/logo.png";
import myImage from "./images/file.png";
import lineGraph from "./images/line-graph.png";
import heatMap from "./images/heatmap.png";
import chat from "./images/chat.png";
import report from "./images/report.png";
import logOut from "./images/logout.png";

const Sidebar = () => {
  return (
    <div className="app">
      <div className="side-bar">
      <div className="image-container">
          <img
            src={logo}
            alt=""
            height="100%"
            width="100%"
            className="white-image"
          />
        </div>
        <div className="image-container">
          <img
            src={myImage}
            alt=""
            height="25px"
            width="25px"
            className="white-image"
          />
          <p style={{ color: "white" }}>Overview</p>
        </div>
        <div className="image-container">
          <img
            src={lineGraph}
            alt=""
            height="25px"
            width="25px"
            className="white-image"
          />
          <p style={{ color: "white" }}>Analytics</p>
        </div>
        <div className="image-container">
          <img
            src={heatMap}
            alt=""
            height="25px"
            width="25px"
            className="white-image"
          />
          <p style={{ color: "white" }}>Heatmap</p>
        </div>
        <div className="image-container">
        <img
          src={report}
          alt=""
          height="25px"
          width="25px"
          className="white-image"
        />
        <p style={{ color: "white" }}>Report</p>
      </div>
        <div className="image-container">
        <img
          src={chat}
          alt=""
          height="25px"
          width="25px"
          className="white-image"
        />
        <p style={{ color: "white" }}>Support</p>
      </div>
      <div className="image-container">
      <img
        src={logOut}
        alt=""
        height="25px"
        width="25px"
        className="white-image"
      />
      <p style={{ color: "white" }}>Logout</p>
    </div>
      </div>
    </div>
  );
};

export default Sidebar;
