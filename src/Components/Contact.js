import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

import { FaPaperPlane, FaLanguage, FaHouseUser, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { GoMail } from "react-icons/go";

import Swal from 'sweetalert2';



const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: 'Message Sent!',
      text: 'Thanks for contacting me!',
      icon: 'success',
      confirmButtonColor: '#0d6efd'
    });

    e.target.reset(); 
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container py-5">
        <h2 className="contact-section-title text-center display-5 fw-bold" data-aos="fade-down">Contact Me</h2>

        <div className="row mt-4">
          {/* Left Info Section */}
          <div className="col-md-6" data-aos="fade-right">
            <h5 className="fw-bold mb-3">Get in Touch</h5>
            <p className="fw-normal fst-italic">Feel free to reach out for new projects, ideas, or collaborations.</p>
            <ul className="list-unstyled contact-info">
              <li><FaHouseUser className="icon" /><strong>Name:</strong> Allen Darson C</li>
              <li><SlLocationPin className="icon" /><strong>Address:</strong> No.7 Balan Nagar South Street, Coimbatore</li>
              <li><IoMailOpenOutline className="icon" /><strong>Email:</strong> <a href="mailto:allendarson27@gmail.com">allendarson27@gmail.com</a></li>
              <li><FaLanguage className="icon" /><strong>Languages:</strong> Tamil, English</li>
            </ul>
          </div>

          {/* Right Form Section */}
          <div className="col-md-6" data-aos="fade-left">
            <form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" pattern="^[A-Za-z\s]{3,30}$" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Type your message..." pattern=".{10,500}" required />
              </Form.Group>
              <Button type="submit" className="btn btn-primary"><FaPaperPlane className="me-2" />Send Message</Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-section text-white mt-5">
        <div className="container text-center py-4">
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <h5 className="fw-bold">Allen Darson C</h5>
              <p>Fullstack Developer | Python · Flask · SQL · HTML · CSS · JS</p>
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
    </section>
  );
};

export default Contact;
