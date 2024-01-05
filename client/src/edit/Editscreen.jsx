// Editscreen.js

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { connect } from "react-redux";
import { updateReport } from "../redux/actions";

const Editscreen = ({ report, formattedDate, handleEditClick, updateReport }) => {
  const { handleSubmit, control } = useForm();

  const onSubmit = async (data) => {
    const id = report._id;

    const updatedData = { ...data, id };
    try {
      const result = await updateReport(updatedData);
      console.log('Request successful:', result);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  const Dropdown = ({ label, initialOptions }) => (
    <div className="input-feild">
      <p>{label}</p>
      <div className="dropdown-position">
        <Controller
          name={label.toLowerCase().replace(/\s/g, "")}
          control={control}
          defaultValue=""
          render={({ field }) => (
            <select
              id={`${label.toLowerCase().replace(/\s/g, "")}-dropdown`}
              name={`${label.toLowerCase().replace(/\s/g, "")}-dropdown`}
              className="edit-dropdown"
              {...field}
            >
              <option value="" disabled hidden>
                Select {label}
              </option>
              {initialOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        />
      </div>
    </div>
  );

  return (
    <div className="diglogBox-bg">
      <div className="dialog-box">
        <div className="edit-nav">
          <span className="edit-text">Edit</span>
          <button onClick={handleEditClick} className="edit-close">
            X
          </button>
        </div>
        <div className="pic-box">
          <div className="sec-1">
            <div className="se1c-left">
              <img
                src={`data:image/png;base64, ${report.imagepath}`}
                alt=""
                className="pic-size"
              />
            </div>
            <div className="sec1-right">
              <div className="sr-num">{report.camname}</div>
              <div className="sr-date">{formattedDate}</div>
            </div>
          </div>
          <hr />
          <div className="sec-2">
            <div className="sec2-right">
              <span className="location-placeHolder">Location</span>
              <span className="det">{report.location}</span>
            </div>
            <div className="sec2-left">
              <span className="location-placeHolder">Incident</span>
              <span className="det">{report.violationtype}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="div-input">
            <Dropdown
              label="Status"
              initialOptions={["OPEN", "RESOLVED", "IN PROGRESS"]}
            />
            <Dropdown
              label="Assigned To"
              initialOptions={["Jackob Jones", "Jackob Jones", "Jackob Jones"]}
            />
            <Dropdown
              label="tags"
              initialOptions={["False alert", "Near miss", "Accident"]}
            />
          </div>
          <div className="save-sec">
            <div className="save-button">
              <button type="submit" className="save-btn">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  updateReport,
};

export default connect(null, mapDispatchToProps)(Editscreen);
