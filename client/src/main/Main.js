import React from 'react'
import "./main.css"
import download from "../images/download.svg"
import calendar from "../images/calendar.svg"

const Main = () => {
  return (
    <div className='align'>
    <div className='main'>
    <div className='align'>
    <div className='incidents'>
    All Incidents (102)</div>
    <button className='button'>Download<img src={download} alt="" /></button>
    <button className='button'>Calendar<img src={calendar} alt="" /></button>
    <button className='dropdown'>Calendar<img src={calendar} alt="" /></button>

    </div>
    </div>
    </div>
  )
}

export default Main