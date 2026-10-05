import React, { useEffect, useState ,useRef } from 'react'
import Preview from '../components/Preview' 
import Edit from '../components/Edit'
import { Link, useParams } from 'react-router-dom'
import { addHistoryAPI, getResumeAPI } from '../api/allAPI'
import html2canvas from 'html2canvas'
import jspdf from 'jspdf'

function View() {
  let {id}=useParams()
  const [resumeData, setResumeData] = useState({})
  //console.log(id) //zseADI2zP3A
  const previewRef=useRef()

  useEffect(()=>{
    getResumeDetails()
  },[])
  const getResumeDetails=async()=>{
    const res=await getResumeAPI(id)
    // console.log(res)
    setResumeData(res.data)
  }

  //to download resume as pdf
  const downloadResume = async () => {
    const previewTag = previewRef.current
    const canvas = await html2canvas(previewTag)
    //to convert into image as we wanna take ss
    // const imgUrl = canvas.toDataURL('image/png')
    // console.log(imgUrl)

    //as the url is so lengthy use cloudinary to reduce its size->blob format
    //ie convert canvas into blob
    canvas.toBlob(async (blob) => {
    const formData = new FormData()
    formData.append("file", blob)
    formData.append("upload_preset", "my_preset")
    const response = await fetch(
        `https://api.cloudinary.com/v1_1/izeztfow/image/upload`,
        {
            method: "POST",
            body: formData
        }
    )
    const res = await response.json()
    //console.log(res) 
    //secure_url contains the short url
    const shortUrl=res.secure_url
    generatePDF(shortUrl)
})
}

  const generatePDF=async(imgUrl)=>{
    //jspdf library
    //to take ss - html2canvas library
    const today=new Date()
    //console.log(today); Thu Oct 01 2026 13:46:02 GMT+0530 (India Standard Time)
   let timestamp = `${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`
    //console.log(timestamp); 10/1/2026
    const pdf=new jspdf()
    const imgWidth=pdf.internal.pageSize.getWidth()
    const imgHeight=pdf.internal.pageSize.getHeight()
    pdf.addImage(imgUrl,'PNG',0,0,imgWidth,imgHeight)

    const downloadDetails={
      timestamp,resumeId:resumeData?.id,resumeImg:imgUrl,jobRole:resumeData?.jobRole
    }
   const res= await addHistoryAPI(downloadDetails)
   console.log(res);
   if(res.status==201){
    pdf.save(`${resumeData?.name}-resume.pdf`)
   }
   

  }
  return (
    <div className='d-flex align-items-center justify-content-center flex-column m-5 p-5'>
      <div>
        <button className='btn text-danger' onClick={downloadResume}>
          <i className="fa-solid fa-file-arrow-down fa-2xl"></i>
        </button>
        {/* edit */}
        <Edit resumeData={resumeData} setResumeData={setResumeData}/>
        <Link to={'/history'} className='text-success'><i className="fa-solid fa-clock-rotate-left fa-2xl"></i></Link>
        <Link to={'/form'} className='text-primary ms-3'><i className='fa-solid fa-backward fa-2xl'></i></Link>
      </div>
      
      {/* Entire resume content so want to take ss*/}
     <div className='m-5'ref={previewRef}>
         <Preview resumeData={resumeData}/>
     </div>
    </div>
  )
}

export default View