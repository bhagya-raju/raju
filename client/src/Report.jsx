import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Navbar from './navbar/Navbar';
import "./report.css"
import Main from './main/Main';
const Report = () => {
  return (
    <div>
    <div className='report'>
    <div>
      <Sidebar/>
      </div>
      <div>
      <Navbar/>
      <Main/>
      </div>
      </div>
    </div>
  );
};

export default Report;
