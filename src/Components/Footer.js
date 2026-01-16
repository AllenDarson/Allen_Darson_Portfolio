import React from 'react'
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";
import { GoMail } from "react-icons/go";
import "../Css/Footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content py-5">
          <div className="row align-items-center">
            {/* Brand/Role Side */}
            <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
              <h5 className="footer-name fw-bold mb-1">Allen Darson C</h5>
              <p className="footer-tagline mb-0">
                Crafting scalable <span className="highlight-cyan">Backend</span> solutions & 
                seamless <span className="highlight-cyan">Frontend</span> experiences.
              </p>
            </div>

            {/* Social Side */}
            <div className="col-md-6 text-center text-md-end">
              <h6 className="fw-bold mb-3 text-uppercase small letter-spacing">Digital Presence</h6>
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="https://www.linkedin.com/in/allen-darson-c-53b6b4217" target="_blank" rel="noreferrer" className="footer-icon-btn linkedin"><FaLinkedin /></a>
                <a href="https://github.com/AllenDarson" target="_blank" rel="noreferrer" className="footer-icon-btn github"><FaGithub /></a>
                <a href="mailto:allendarson27@gmail.com" className="footer-icon-btn mail"><GoMail /></a>
                <a href="https://wa.me/+918760961525" target="_blank" rel="noreferrer" className="footer-icon-btn whatsapp"><FaWhatsapp /></a>
              </div>
            </div>
          </div>

          <div className="footer-divider my-4"></div>

          <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
            <p className="small mb-0 opacity-75">&copy; 2026 Allen Darson C. All rights reserved.</p>
            <div className="footer-links small">
              <a href="#home" className="footer-bottom-link">Home</a>
              <span className="mx-2 opacity-25">|</span>
              <a href="#projects" className="footer-bottom-link">Projects</a>
              <span className="mx-2 opacity-25">|</span>
              <a href="#contact-section" className="footer-bottom-link">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}