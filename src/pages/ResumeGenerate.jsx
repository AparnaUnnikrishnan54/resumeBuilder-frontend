import React from 'react'
import { IoDocumentText } from "react-icons/io5";
import { IoIosDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

function ResumeGenerate() {
  return (
    <div className='container-fluid'>
      <h2 className='mt-5 text-center'>Create a Job Winning Resume in Minutes</h2>
      <div className='row justify-content-center align-items-center mt-5' style={{height:"50vh"}}>

        <div className='col-4 text-center border shadow p-5 '>
          <IoDocumentText className='text-primary mb-4' size={40} />
          <h4>Add Your Information</h4>
          <p>Add pre-written examples to each section</p>
          <h5 className='pt-4'>Step 1</h5>
        </div>

        <div className='col-1'></div>

        <div className='col-4 text-center border shadow p-5'>
          <IoIosDownload  className='text-danger mb-4' size={40} />
          <h4>Download Your Resume</h4>
          <p>Download and start applying</p>
          <h5 className='pt-4'>Step 2</h5>
        </div>

      </div>

      <div className='text-center'>
        <Link to='/form' className='btn text-light my-5' style={{backgroundColor:'rgba(20, 35, 50, 0.90)'}}>LET'S START</Link>
      </div>

    </div>
  )
}

export default ResumeGenerate