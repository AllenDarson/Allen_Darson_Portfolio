import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaBirthdayCake, FaGraduationCap } from 'react-icons/fa';
import AOS from 'aos';
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-wrapper">
          {/* Header */}
          <div className="text-center mb-5" data-aos="fade-down">
            <h2 className="fw-bold display-5">About Me</h2>
            <p className="text-muted">Who I am, what I do, and why I do it</p>
            <div className="section-divider"></div>
          </div>

          {/* Profile Info */}
          <div className="row align-items-center">
            <div className="col-md-4 text-center mb-4 mb-md-0" data-aos="zoom-in">
              <img
                src="/portfolio-Photoroom.jpg"
                className="img-fluid rounded-circle shadow"
                alt="Allen Darson"
                style={{ width: '230px', height: '230px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-8" data-aos="fade-left">
              <h4 className="fw-bold mb-3 text-primary">I'm Allen Darson C</h4>
              <p>
                👋 I'm a <strong>2023 graduate</strong> passionate about full-stack and SQL development.<br />
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
            <h2 className="text-center text-primary mb-5">🎓 Education</h2>
            <div className="timeline">
              <div className="timeline-item left" data-aos="fade-right">
                <div className="timeline-dots"></div>
                <div className="timeline-card">
                  <h5>B.E. in Mechanical Engineering</h5>
                  <p>Sri Ramakrishna Engineering College</p>
                </div>
                <div className="timeline-date">2019 - 2023</div>
              </div>

              <div className="timeline-item right" data-aos="fade-left">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <h5>Higher Secondary Certificate (HSC)</h5>
                  <p>GRG Matric Higher Secondary School</p>
                </div>
                <div className="timeline-date">2018 - 2019</div>
              </div>

              <div className="timeline-item left" data-aos="fade-right">
                <div className="timeline-dots"></div>
                <div className="timeline-card">
                  <h5>Secondary School Leaving Certificate (SSLC)</h5>
                  <p>GRG Matric Higher Secondary School</p>
                </div>
                <div className="timeline-date">2016 - 2017</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default About;