import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resumeFile from '../Images/myResume.pdf';

import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';
import { PiHandPeaceDuotone } from 'react-icons/pi';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserTie, FaGraduationCap, FaListCheck, FaPaperPlane } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { SiWhatsapp } from 'react-icons/si';
import { IoLogoGithub } from 'react-icons/io';
import { CiLinkedin } from 'react-icons/ci';
import { LiaFileDownloadSolid } from 'react-icons/lia';


const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm" data-aos="fade-down">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4" href="#home">
            <PiHandPeaceDuotone /> Allen Darson C
          </a>
          <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-2"><a className="nav-link" href="#home"><AiOutlineHome /> Home</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#about"><FaUserTie /> About</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#skills"><FaGraduationCap /> Skills</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#projects"><FaListCheck /> Projects</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#contact"><FaPaperPlane /> Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container">
          <div className="hero-card row g-4 align-items-center" data-aos="zoom-in">
            <div className="col-md-6">
              <h1 className="display-5 fw-bold mb-3">
                <span className="wave">👋🏻</span> <span>Hi, I'm <span className="highlight">Allen Darson</span></span>
              </h1>
              <p className="lead mb-4">
                A passionate <strong>Fullstack Developer</strong> and <strong>SQL Developer</strong> skilled in Python, SQL, Django, Flask, and React.
              </p>

              <motion.a
                href={resumeFile}
                download="myResume"
                whileHover={{ scale: 1.05 }}
                className="btn btn-dark me-3"
              >
                <LiaFileDownloadSolid className="me-2" />
                Download Resume
              </motion.a>

              <div className="mt-4 fs-4 social-icons d-flex gap-3">
                <a href="https://www.linkedin.com/in/allen-darson-c-53b6b4217" className="icon-balloon linkedin" target="_blank" rel="noreferrer"><CiLinkedin /></a>
                <a href="https://wa.me/+918760961525" className="icon-balloon whatsapp" target="_blank" rel="noreferrer"><SiWhatsapp /></a>
                <a href="https://instagram.com" className="icon-balloon instagram" target="_blank" rel="noreferrer"><GrInstagram /></a>
                <a href="https://github.com/AllenDarson" className="icon-balloon github" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
              </div>
            </div>

            <div className="col-md-6 text-center">
              <img
                src="/portfolio-Photoroom.jpg"
                alt="Allen Darson"
                className="img-fluid rounded-circle shadow"
                style={{ width: '280px', height: '280px', objectFit: 'cover' }} // 🔑 fix here
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default Home;
