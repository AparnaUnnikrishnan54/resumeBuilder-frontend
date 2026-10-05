import React, { useState } from 'react'
import Stepss from '../components/Stepss'
import Preview from '../components/Preview'

function UserForm() {

//pasted from Stepss as the part of state lifting
// ie we can't pass data from stepss to preview as they are siblings so create state in userform page thereby pass data 
  const [resumeData,setResumeData]=useState({
    name:"",
    jobTitle:"",
    location:"",
    email:"",
    phone:"",
    github:"",
    linkedin:"",
    degree:"",
    university:"",
    passout:"",
    skills:[],
    summary:""
  })

  return (
    <div className='row'>
      <div className='col-lg-6'>
        <Stepss resumeData={resumeData} setResumeData={setResumeData}/>
      </div>
      <div className='col-lg-6'>
        {/* get resumedata from preview 
         conditional rendering ->  Display Preview only when the user has entered their name */}
        {
          resumeData?.name && <Preview resumeData={resumeData}/> 
        }
                                
      </div>
    </div>
  )
}

export default UserForm

    //              UserForm
    //           owns resumeData
    //                │
    //       ┌────────┴────────┐
    //       ↓                 ↓
    //    Stepss             Preview
    //       │                 │
    //  updates data       displays data