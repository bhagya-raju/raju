import React from 'react'
import "./card.css"
import redalert from "../images/Rectanglered.svg"
import maximize from "../images/maximize.svg"
import ellipse from "../images/ellipse.svg"
import Ellipse from "../images/Ellipsenew.svg"
import cright from "../images/cright.svg"
import cleft from "../images/cleft.svg"
import edit from "../images/edit.svg"
import more from "../images/more.svg"

const Card = ({report}) => {
    // const options = {
    //     day: 'numeric',
    //     month: 'short',
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric',
    //   };
      
    //   const formattedDate = new Intl.DateTimeFormat('en-US', options).format(report.time);
      
  return (
    <div className='card'>
    <div>
    <div className='red-alert'>
      <img src={redalert} alt="" />
      <p className='alert-text'>{report.tags}</p>
    </div>
    <div className='ellipse'>
    <img src={ellipse} alt="" />
    </div>
    <div className='maximize'>
    <img src={maximize} alt="" />
    </div>
    <div className='Ellipse'>
    <img src={Ellipse} alt="" />
    </div>
    <div className='Ellipse2'>
    <img src={Ellipse} alt="" />
    </div>
    <div className='cright'>
    <img src={cright} alt="" />
    </div>
    <div className='cleft'>
    <img src={cleft} alt="" />
    </div>
    <div className='image-container'>
      <img src={`data:image/png;base64, ${report.imagepath}`} alt="" className='image' />
    </div>
    </div>
    <div className='card-text'>
    <div className='flex-align'>
    <div className='row-align'>
    <p className='camname'>{report.camname}</p>
    <p className='status'>{report.status}</p>
    </div>
    <div className='row-align-new'>
    <img src={edit} alt="" />
    <img src={more} alt="" />
    </div>
    </div>
    <p className='time'>20 Aug, 10:12:20 </p>
    </div>
    <div>
    
    </div>
  </div>
  )
}

export default Card