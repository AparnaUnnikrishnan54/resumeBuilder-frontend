import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import React from 'react'
import { Link } from 'react-router-dom'

function Preview({resumeData}) {
  // console.log(resumeData);
  
  return (
    <Box>
      <Paper elevation={3} sx={{textAlign:'center'}}>
        <h2><b>{resumeData?.name}</b></h2>
        <h5>{resumeData?.jobTitle}</h5>
        <p>
          <span>{resumeData?.location}</span> || <span>{resumeData?.email}</span> || <span>{resumeData?.phone}</span>
        </p>
        <p>
          <Link to={resumeData?.linkedin}>LinkedIn</Link> ||
          <Link to={resumeData?.github}>GitHub</Link>
        </p>
        <h4 className='text-center'><b>SUMMARY</b></h4>
        <Divider sx={{borderColor:'black'}}></Divider>
        <p>{resumeData?.summary}</p>
        <h4 className='text-center'><b>SKILLS</b></h4>
        <Divider sx={{borderColor:'black'}}></Divider>
        {
          resumeData?.skills?.map((sk, index)=>(
            <button key={index} className='btn border m-2'>{sk}</button>
          ))
        }
        <h4 className='text-center'><b>EDUCATION</b></h4>
        <Divider sx={{borderColor:'black'}}></Divider>
        <h5>{resumeData?.degree}</h5>
        <p>{resumeData?.university} || {resumeData?.passout}</p>
      </Paper>
    </Box>
  )
}

export default Preview