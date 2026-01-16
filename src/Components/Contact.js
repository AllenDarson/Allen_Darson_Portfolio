import "../Css/Contact.css";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaWhatsapp, FaLinkedinIn, FaCopy } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa6";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from 'sweetalert2';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        telephone: '',
        comments: '',
    });

    const handleChange = (e) => {
        const formId = e.target.id;
        let key = formId.replace('form', '').charAt(0).toLowerCase() + formId.replace('form', '').slice(1);
        setFormData({ ...formData, [key]: e.target.value });
    };

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: `${type} copied!`,
            showConfirmButton: false,
            timer: 1500,
            background: '#1a1a1a',
            color: '#fff'
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.firstName || !formData.email || !formData.comments) {
            Swal.fire({
                icon: 'warning',
                title: 'Missing Info',
                text: 'Please fill in the required fields.',
                background: 'var(--card-bg)',
                color: 'var(--text-main)'
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'I will get back to you soon!',
            timer: 3000,
            background: 'var(--card-bg)',
            color: 'var(--text-main)',
            showConfirmButton: false
        });

        setFormData({ firstName: '', lastName: '', email: '', telephone: '', comments: '' });
    };

    return (
        <section id="contact-section" className="py-5">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-5"
                >
                    <h1 className="display-4 fw-bold contact-title">Connect With Us</h1>
                    <p className="contact-subtitle">Feel free to reach out for new projects, ideas, or collaborations.</p>
                    <div className="underline mx-auto mb-4"></div>
                </motion.div>

                <Row className="justify-content-center">
                    <Col lg={6} className="mb-4" data-aos="fade-up">
                        <div className="p-4 glass-card contact-form-container">
                            <Form onSubmit={handleSubmit}>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formFirstName">
                                            <Form.Control type="text" placeholder="First Name" className="contact-input" value={formData.firstName} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formLastName">
                                            <Form.Control type="text" placeholder="Last Name" className="contact-input" value={formData.lastName} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formEmail">
                                            <Form.Control type="email" placeholder="Email Address" className="contact-input" required value={formData.email} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formTelephone">
                                            <Form.Control type="tel" placeholder="Phone (Optional)" className="contact-input" value={formData.telephone} onChange={handleChange} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-4" controlId="formComments">
                                    <Form.Control as="textarea" rows={4} placeholder="Your Message" className="contact-input" value={formData.comments} onChange={handleChange} />
                                </Form.Group>
                                <div className="d-grid">
                                    <Button type="submit" className="contact-submit-btn">
                                        <span className="btn-text">Send Message</span>
                                        <div className="btn-icon"><FaEnvelope /></div>
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>

                    <Col lg={4} data-aos="fade-up" data-aos-delay="200">
                        <div className="p-4 glass-card contact-info-container">
                            <div className="info-row" onClick={() => copyToClipboard("+918760961525", "Phone")}>
                                <div className="info-icon"><FaPhone /></div>
                                <div className="info-content">
                                    <h6>Phone</h6>
                                    <p>+91-8760961525 <FaCopy className="copy-small" /></p>
                                </div>
                            </div>
                            <div className="info-row" onClick={() => copyToClipboard("allendarson27@gmail.com", "Email")}>
                                <div className="info-icon"><FaEnvelope /></div>
                                <div className="info-content">
                                    <h6>Email</h6>
                                    <p>allendarson27@gmail.com <FaCopy className="copy-small" /></p>
                                </div>
                            </div>
                            <div className="info-row">
                                <div className="info-icon"><FaMapMarkerAlt /></div>
                                <div className="info-content">
                                    <h6>Location</h6>
                                    <p>No.69 Lalbahadur Nagar, Masakalipalaiyam </p>
                                    <p>Road, Peelamedu,Coimbatore, India</p>
                                </div>
                            </div>
                            <hr className="divider" />
                            <h6 className="follow-text">Follow Me</h6>
                            <div className="social-grid">
                                <a href="#fb" className="social-btn"><FaFacebookF /></a>
                                <a href="https://wa.me/+918760961525" className="social-btn"><FaWhatsapp /></a>
                                <a href="https://linkedin.com" className="social-btn"><FaLinkedinIn /></a>
                                <a href="https://github.com" className="social-btn"><FaGithub /></a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;