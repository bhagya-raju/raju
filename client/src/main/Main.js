import React, { useEffect } from "react";
import "./main.css";
import download from "../images/download.svg";
import calendar from "../images/calendar.svg";
import right from "../images/right.svg";
import Card from "../card/Card";
import { connect } from "react-redux";
import { fetchData, } from "../redux/actions";
const Main = ({data,fetchData}) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="align">
      <div className="main">
        <div className="align">
        <div className="flex-container">
          <div className="incidents">All Incidents (102)</div>
          <div>
          <button className="button">
            Download
            <img src={download} alt="" />
          </button>
          <button className="button">
            Calendar
            <img src={calendar} alt="" />
          </button>
          </div>
          </div>
          <div>
            <button className="dropdown">
              Status
              <img src={right} alt="" />
            </button>
            <select id="dropdown" className="dropdown">
            <option >Status<img src={right} alt="" /> </option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>

            <button className="dropdown">
              Tags
              <img src={right} alt="" />
            </button>
            <button className="dropdown">
              Location
              <img src={right} alt="" />
            </button>
            <button className="dropdown">
              Violation
              <img src={right} alt="" />
            </button>
            <button className="dropdown">Unassigned</button>
          </div>
        </div>
        {data.map((report) => (
          <Card key={report._id} report={report} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data
});

const mapDispatchToProps = {
  fetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
