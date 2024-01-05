import React, { useEffect, useState } from "react";
import "./main.css";
import download from "../images/download.svg";
import calendar from "../images/calendar.svg";
import Card from "../card/Card";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";

const Main = ({ data, fetchData }) => {
  const [filters, setFilters] = useState({
    status: '',
    tags: '',
    location: '',
    violation: '',
  });

  const [filteredData, setFilteredData] = useState([]);

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  useEffect(() => {
    try {
      const filteredData = data.filter(item => {
        if (Object.values(filters).every(filter => !filter)) {
          return true;
        }
        return (
          
          (!filters.status || item.status.toLowerCase() === filters.status.toLowerCase()) &&
          (!filters.tags || item.tags.toLowerCase() === filters.tags.toLowerCase()) &&
          (!filters.location || item.location.toLowerCase() === filters.location.toLowerCase()) &&
          (!filters.violation || item.violation.toLowerCase() === filters.violation.toLowerCase())
        );
      });
  
      console.log("Filtered Data:", filteredData);
  
      setFilteredData(filteredData);
    } catch (error) {
      console.error("Error during filtering:", error);
    }
  }, [data, filters]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="align">
      <div className="main">
        <div className="align">
          <div className="flex-container">
            <div className="incidents">All Incidents ({filteredData.length})</div>
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
            <select
              id="statusDropdown"
              className="dropdown"
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
            >
              <option value="">Status</option>
              <option value="Open">Open</option>
              <option value="Resolved">Resolved</option>
              <option value="In Progress">In Progress</option>
            </select>

            <select
              id="tagsDropdown"
              className="dropdown"
              value={filters.tags}
              onChange={(e) => handleFilterChange('tags', e.target.value)}
            >
              <option value="">Tags</option>
              <option value="False alert">False alert</option>
              <option value="Near miss">Near miss</option>
              <option value="Accident">Accident</option>
            </select>

            <select
              id="locationDropdown"
              className="dropdown"
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <option value="">Location</option>
              <option value="Mixing Tank">Mixing Tank</option>
              <option value="Loading Dock">Loading Dock</option>
              <option value="Control Room">Control Room</option>
              <option value="Coke Drum A">Coke Drum A</option>
            </select>

            <select
              id="violationDropdown"
              className="dropdown"
              value={filters.violation}
              onChange={(e) => handleFilterChange('violation', e.target.value)}
            >
              <option value="">Violation</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>

            <button className="dropdown">Unassigned</button>
          </div>
        </div>
        <div className="grid">
        {filteredData.map((report) => (
          <Card key={report._id} report={report} />
        ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data.data,
});

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
