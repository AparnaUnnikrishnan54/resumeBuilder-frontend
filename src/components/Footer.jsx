import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Footer() {
  return (
    <div style={{height:"400px",backgroundColor:'rgba(20, 35, 50, 0.90)', color:'white'}} 
    className='d-flex flex-column align-items-center justify-content-center gap-2'>
      <h1>Contact Us</h1>
      <h5><MdEmail />resumebuilder@gmail.com</h5>
      <h5><FaPhoneAlt />7846534256</h5>
      <h4>Connect With Us</h4>
      <div className='d-flex align items-center my-2 fs-3 gap-3'>
        <IoLogoWhatsapp />
        <FaFacebook />
        <FaInstagramSquare />
      </div>

      <p>Designed & Built with React</p>
    </div>
  )
}

export default Footer