import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resumeFile from '../Images/Allen_Darson_Resume_personal.pdf';

// import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';
import { PiHandPeaceDuotone } from 'react-icons/pi';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserTie, FaGraduationCap, FaListCheck, FaPaperPlane } from 'react-icons/fa6';
import { GrInstagram } from 'react-icons/gr';
import { SiWhatsapp } from 'react-icons/si';
import { IoLogoGithub } from 'react-icons/io';
import { CiLinkedin } from 'react-icons/ci';
import { LiaFileDownloadSolid } from 'react-icons/lia';

import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
// import { AiOutlineHome } from 'react-icons/ai';




const Home = () => {

  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Roles for the animation
  const [index, setIndex] = useState(0);
  const roles = ["Fullstack Developer", "Python Developer", "SQL Developer"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000); // 4 seconds gives enough time for the full sentence to reveal
    return () => clearInterval(timer);
  }, [roles.length]);

  // Animation variants for the letters
  const letterVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -40, opacity: 0 }
  };

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.03, // This creates the "video" effect where letters follow each other
      }
    }
  };



  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm">
        <div className="container d-flex align-items-center justify-content-between">

          {/* Brand */}
          <a className="navbar-brand fw-bold fs-4" href="#home">
            Allen Darson C
          </a>

          <div className="d-flex align-items-center d-lg-none">
            {/* Theme Toggle Button (mobile only) */}
            <button
              className="theme-toggle-icon me-2"
              onClick={toggleDarkMode}
              title="Toggle theme"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>

            {/* Toggler Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          {/* Nav Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item mx-2"><a className="nav-link" href="#home"><AiOutlineHome /> Home</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#about"><FaUserTie /> About</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#skills"><FaGraduationCap /> Skills</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#projects"><FaListCheck /> Projects</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="#contact-section"><FaPaperPlane /> Contact</a></li>
            </ul>

            {/* Theme Toggle (desktop only) */}
            <button
              className="theme-toggle-icon ms-lg-3 d-none d-lg-inline-block"
              onClick={toggleDarkMode}
              title="Toggle theme"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="container">
          <div className="hero-card row g-4 align-items-center" data-aos="zoom-in">
            <div className="col-md-6">
              <h1 className="display-5 fw-bold mb-3">
                <span className="wave">👋🏻</span> <span className="highlight">Hi, I'm <span className="highlight">Allen Darson</span></span>
              </h1>

              {/* REVEAL ANIMATION SECTION */}
              <div className="reveal-wrapper mb-4">
                {/* The "A" stays stationary */}
                <span className="static-text me-2">A</span>

                <div className="role-container">
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={roles[index]}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="reveal-role fw-bold"
                    >
                      {roles[index]}
                    </motion.h2>
                  </AnimatePresence>
                </div>
              </div>


              <p className="lead mb-4">
                A passionate <strong>Python Developer</strong>, <strong>Fullstack Developer</strong>, and <strong>SQL Developer</strong> skilled in Python, SQL, Django, Flask, and React.
              </p>


              {/* <motion.a
                href={resumeFile}
                download="myResume"
                whileHover={{ scale: 1.05 }}
                className="btn btn-dark me-3"
              >
                <LiaFileDownloadSolid className="me-2" />
                Download Resume
              </motion.a> */}
              <motion.a
                href={resumeFile}
                download="Allen_Darson_Resume_personal.pdf"
                className="btn-github resume-btn" // Added 'resume-btn' for specific styling
                whileHover={{ scale: 1.05 }}
                style={{ textDecoration: 'none' }} // Ensures no underline
              >
                {/* The Icon */}
                <LiaFileDownloadSolid size={20} />

                {/* The Text */}
                <span>Download Resume</span>
              </motion.a>

              <div className="mt-4 fs-4 social-icon d-flex gap-3">
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
