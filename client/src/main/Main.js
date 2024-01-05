import React, { useEffect, useState } from "react";
import "./main.css";
import download from "../images/download.svg";
import calendar from "../images/calendar.svg";
import Card from "../card/Card";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";

const Main = ({ data, fetchData }) => {
  const [filters, setFilters] = useState({
    status: "",
    tags: "",
    location: "",
    violation: "",
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
      const filterFunction = (item) => {
        if (Object.values(filters).every((filter) => !filter)) {
          return true;
        }
  
        return (
          (!filters.status ||
            item.status.toLowerCase() === filters.status.toLowerCase()) &&
          (!filters.tags ||
            filters.tags.includes(item.tags.toLowerCase())) &&
          (!filters.location ||
            filters.location.includes(item.location.toLowerCase())) &&
          (!filters.violation ||
            filters.violation.includes(item.violation.toLowerCase()))
        );
      };
  
      const filteredData =
        filters.tags.length === 0 &&
        filters.location.length === 0 &&
        filters.violation.length === 0
          ? data // No filtering for "Status" alone, return all data
          : data.filter(filterFunction);
  
      setFilteredData(filteredData);
    } catch (error) {
      console.error("Error during filtering:", error);
    }
  }, [data, filters]);
  

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const dropdownOptions = {
    status: ["Open", "Resolved", "In Progress"],
    tags: ["False alert", "Near miss", "Accident"],
    location: ["Mixing Tank", "Loading Dock", "Control Room", "Coke Drum A"],
    violation: ["Option 1", "Option 2"],
  };

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
            {Object.entries(dropdownOptions).map(([key, values]) => (
              <select
                key={key}
                id={`${key}Dropdown`}
                className="dropdown"
                value={filters[key]}
                onChange={(e) => handleFilterChange(key, e.target.value)}
              >
                <option value="">
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </option>
                {values.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            ))}
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
