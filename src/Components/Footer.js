import React from 'react'
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import "../Css/Footer.css";

export default function
() {
  return (
    
        <footer className="footer-section text-white mb-1">
                 <div className="container text-center py-4">
                   <div className="row mb-3">
                     <div className="col-md-6 mb-3 mb-md-0">
                       <h5 className="fw-bold">Allen Darson C</h5>
                       <p>Fullstack Developer | Python Developer | Django · Flask · SQL · HTML · CSS · JS</p>
                     </div>
                     <div className="col-md-6">
                       <h6 className="fw-bold mb-3">Connect with me</h6>
                       <div className="d-flex justify-content-center gap-3 fs-4">
                         <a href="https://www.linkedin.com/in/allen-darson-c-53b6b4217" target="_blank" rel="noreferrer" className="text-white"><FaLinkedin /></a>
                         <a href="https://github.com/AllenDarson" target="_blank" rel="noreferrer" className="text-white"><FaGithub /></a>
                         <a href="mailto:allendarson27@gmail.com" className="text-white"><GoMail /></a>
                         <a href="https://wa.me/+918760961525" target="_blank" rel="noreferrer" className="text-white"><FaWhatsapp /></a>
                       </div>
                     </div>
                   </div>
                   <hr className="bg-white" />
                   <p className="small mb-0">&copy; 2025 Allen Darson C. All rights reserved.</p>
                 </div>
               </footer>
    
  )
}
