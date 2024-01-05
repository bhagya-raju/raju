import React, { useState } from "react";
import Editscreen from "../edit/Editscreen";
import "./card.css";
import redalert from "../images/Rectanglered.svg";
import accident from "../images/Accident.svg";
import nearmiss from "../images/nearmiss.svg";
import maximize from "../images/maximize.svg";
import ellipse from "../images/ellipse.svg";
import Ellipse from "../images/Ellipsenew.svg";
import cright from "../images/cright.svg";
import cleft from "../images/cleft.svg";
import edit from "../images/edit.svg";
import more from "../images/more.svg";
import violation from "../images/violation.svg";
import assigned from "../images/assigned.svg";
import comment from "../images/comment.svg";
import location from "../images/location.svg";

const Card = ({ report }) => {
  const timestamp = report.time;
  const dateObject = new Date(timestamp);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(dateObject);

  let tagImage;

  if (report.tags === "False alert") {
    tagImage = <img src={redalert} alt="Red alert" />;
  } else if (report.tags === "Accident") {
    tagImage = <img src={accident} alt="Accident" />;
  } else {
    tagImage = <img src={nearmiss} alt="Near miss" />;
  }

  const getStatus = (status) => {
    switch (status.toLowerCase()) {
      case "open":
        return "open";
      case "in progress":
        return "inprogress";
      case "resolved":
        return "resolved";
      default:
        return "default";
    }
  };

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEditClick = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  return (
    <div className="card">
      <div>
        <div className="red-alert">
          {tagImage}
          <p className="alert-text">{report.tags}</p>
        </div>
        <div className="ellipse">
          <img src={ellipse} alt="" />
        </div>
        <div className="maximize">
          <img src={maximize} alt="" />
        </div>
        <div className="Ellipse">
          <img src={Ellipse} alt="" />
        </div>
        <div className="Ellipse2">
          <img src={Ellipse} alt="" />
        </div>
        <div className="cright">
          <img src={cright} alt="" />
        </div>
        <div className="cleft">
          <img src={cleft} alt="" />
        </div>
        <div className="location text-align">
          <img src={location} alt="" className="text-align-new" />
          <p>{report.location}</p>
        </div>

        <div>
          <img
            src={`data:image/png;base64, ${report.imagepath}`}
            alt=""
            className="image"
          />
        </div>
      </div>
      <div className="card-text">
        <div className="flex-align">
          <div className="row-align">
            <p className="camname">{report.camname}</p>
            <p className={`status ${getStatus(report.status)}`}>
              {report.status}
            </p>
          </div>
          <div className="row-align-new">
            {/* Replace the Link with a button and handleEditClick */}
            <button className="edit-icon" onClick={handleEditClick}>
              <img src={edit} alt="" />
            </button>
            <img src={more} alt="" />
          </div>
        </div>
        <div>
          <p className="time">{formattedDate}</p>
        </div>
        <div className="flex-align">
          <div className="text-align">
            <img src={violation} alt="" className="text-align-new" />
            <p>{report.violationtype}</p>
          </div>
          <div className="text-align">
            <img src={assigned} alt="" className="text-align-new" />
            <p>{report.assignedto}</p>
          </div>
        </div>
        {report.comments.length === 0 ? (
          <div className="text-align">
            <img src={comment} alt="" className="text-align-new" />
            <p className="comments-style">Add Comments</p>
          </div>
        ) : (
          <div className="text-align">
            <img src={comment} alt="" className="text-align-new" />
            <p>{report.comments.length} Comments</p>
            <img src={cleft} alt="" className="text-align-new" />
          </div>
        )}
      </div>
      <div>
        {isDialogOpen && (
          <Editscreen
            report={report}
            formattedDate={formattedDate}
            handleEditClick={handleEditClick}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
