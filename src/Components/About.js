import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa';
import AOS from 'aos';
import React, { useEffect } from 'react';
import "../Css/About.css";
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      disable: 'mobile',
      useClassNames: true
    });
  }, []);

  const text = "About Me";

  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const letterVars = {
    initial: {
      opacity: 0,
      y: 60,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <section id="about" className="about-section">
      {/* STAR CONTAINER REMOVED FROM HERE */}

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        <div className="about-wrapper">
          {/* Header */}
          <div style={{ overflow: 'hidden', padding: '10px 0' }}>
            <motion.h2
              className="fw-bold display-5"
              variants={containerVars}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.4 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                color: 'rgb(13, 202, 240)',
                margin: 0,
                overflow: 'hidden'
              }}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVars}
                  style={{ display: 'inline-block' }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
          </div>

          <div className="text-center mb-5">
            <div className="section-divider"></div>
          </div>

          {/* Profile Info */}
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8" data-aos="fade-left">
              <h4 className="fw-bold mb-3">I'm Allen Darson C</h4>
              <p>
                👋 I'm a <strong>2023 graduate</strong> passionate about python, full-stack and SQL development.<br />
                I build modern web apps using <strong>Python, Django, Flask, SQL, HTML, CSS, Bootstrap, JavaScript, and React</strong>.
              </p>
              <div className="row mt-4">
                <div className="col-sm-6">
                  <ul className="list-unstyled">
                    <li><FaBirthdayCake className="me-2 text-secondary" /> <strong>DOB:</strong> 05/05/2001</li>
                    <li><FaPhoneAlt className="me-2 text-secondary" /> <strong>Phone:</strong> +91-8760961525</li>
                  </ul>
                </div>
                <div className="col-sm-6">
                  <ul className="list-unstyled">
                    <li><FaEnvelope className="me-2 text-secondary" /> <strong>Email:</strong> allendarson27@gmail.com</li>
                    <li><FaMapMarkerAlt className="me-2 text-secondary" /> <strong>Location:</strong> Coimbatore, Tamil Nadu</li>
                  </ul>
                </div>
              </div>
              <p className="mt-3">
                🚀 I love learning and growing every day. Let’s collaborate on something impactful!
              </p>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="timeline-container mt-5">
            <h2 className="text-center mb-5">🎓 Education & Experience</h2>
            <div className="timeline">

              {/* Junior Developer*/}
              <div className="timeline-item right" data-aos="fade-left">
                <div className="timeline-icon">
                  <img src="/logo3portfolio.jpg" alt="logo" />
                </div>
                <div className="timeline-card">
                  <h5>Junior Developer</h5>
                  <p className="text-muted">Acculer Media Technology India Pvt Ltd</p>
                  <small className="fw-bold">05th January 2026 - Present</small>
                  <p className="mt-2">
                    Transitioned into a full-time role, focusing on building scalable web applications, 
      optimizing frontend performance, and managing end-to-end deployments.
                  </p>
                </div>
              </div>


              {/* Internship */}
              <div className="timeline-item left" data-aos="fade-right">
                <div className="timeline-icons">
                  <img src="/logo3portfolio.jpg" alt="logo" />
                </div>
                <div className="timeline-card">
                  <h5>Developer Intern</h5>
                  <p className="text-muted">Acculer Media Technology India Pvt Ltd</p>
                  <small className="fw-bold">29th september 2025 - 03th January 2026</small>
                  <p className="mt-2">
                    Worked as a Developer Intern creating and refining web pages while handling deployments using Git, Render, and Hostinger.
                  </p>
                </div>
              </div>

              {/* Institute Course */}
              <div className="timeline-item right" data-aos="fade-left">
                <div className="timeline-icon">
                  <img src="/ipcs-global-icon.jpg" alt="logo" />
                </div>
                <div className="timeline-card">
                  <h5>Advance Fullstack Developer (Python)</h5>
                  <p className="text-muted">IPCS Global Coimbatore</p>
                  <small className="fw-bold">03 Sep 2024 – 25 Aug 2025</small>
                  <p className="mt-2">
                    Completed hands-on training in Python, Fullstack development, and related technologies.
                  </p>
                </div>
              </div>

              {/* BE */}
              <div className="timeline-item left" data-aos="fade-right">
                <div className="timeline-icons">
                  <img src="/college.react.jpeg" alt="logo" />
                </div>
                <div className="timeline-card">
                  <h5>B.E. in Mechanical Engineering</h5>
                  <p className="text-muted">Sri Ramakrishna Engineering College</p>
                  <small className="fw-bold">2019 – 2023</small>
                  <p className="mt-2">
                    Grade: <strong>7.69 CGPA</strong><br />
                    Strong foundation in problem-solving and analytical thinking.
                  </p>
                </div>
              </div>

              {/* HSC */}
              <div className="timeline-item right" data-aos="fade-left">
                <div className="timeline-icon">
                  <img src="/school.react.jpg" alt="logo" />
                </div>
                <div className="timeline-card">
                  <h5>Higher Secondary Certificate (HSC)</h5>
                  <p className="text-muted">GRG Matric Higher Secondary School</p>
                  <small className="fw-bold">2018 – 2019</small>
                  <p className="mt-2">
                    Focused on Mathematics, Physics, Chemistry and Computer Science.
                  </p>
                </div>
              </div>

              {/* SSLC */}
              <div className="timeline-item left" data-aos="fade-right">
                <div className="timeline-icons">
                  <img src="/school.react.jpg" alt="logo" />
                </div>
                <div className="timeline-card">
                  <h5>Secondary School Leaving Certificate (SSLC)</h5>
                  <p className="text-muted">GRG Matric Higher Secondary School</p>
                  <small className="fw-bold">2016 – 2017</small>
                  <p className="mt-2">
                    Completed SSLC with a focus on Mathematics, Science and Social.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;