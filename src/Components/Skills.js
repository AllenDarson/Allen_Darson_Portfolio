import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from 'framer-motion';

// Icons
import { FaCss3Alt, FaReact, FaPython, FaGitAlt, FaGithubSquare } from "react-icons/fa";
import { SiBootstrap, SiMysql, SiFlask, SiDjango } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { AiOutlineHtml5 } from "react-icons/ai";

import "../Css/Skills.css";

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const text = "Skills & Technologies";

    // Heading Animation Logic
    const containerVars = {
        initial: {},
        animate: { transition: { staggerChildren: 0.03 } }
    };

    const letterVars = {
        initial: { opacity: 0, y: 60 },
        animate: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    const skillData = [
        {
            title: "Frontend Development",
            skills: [
                { name: "HTML5", icon: <AiOutlineHtml5 className="html-icon" /> },
                { name: "CSS3", icon: <FaCss3Alt className="css-icon" /> },
                { name: "JavaScript", icon: <RiJavascriptLine className="js-icon" /> },
                { name: "React JS", icon: <FaReact className="react-icon" /> },
                { name: "Bootstrap", icon: <SiBootstrap className="bootstrap-icon" /> },
            ]
        },
        {
            title: "Backend & Database",
            skills: [
                { name: "Python", icon: <FaPython className="python-icon" /> },
                { name: "Flask", icon: <SiFlask className="flask-icon" /> },
                { name: "Django", icon: <SiDjango className="django-icon" /> },
                { name: "MySQL", icon: <SiMysql className="mysql-icon" /> },
            ]
        },
        {
            title: "Tools & Version Control",
            skills: [
                { name: "Git", icon: <FaGitAlt className="git-icon" /> },
                { name: "GitHub", icon: <FaGithubSquare className="github-icon" /> },
                { name: "VS Code", icon: <VscVscode className="vscode-icon" /> },
            ]
        }
    ];

    return (
        <section id="skills" className="py-5">
            <Container>
                {/* RESTORED ANIMATED HEADING */}
                <div style={{ overflow: 'hidden', padding: '10px 0' }}> 
                    <motion.h1 
                        className="text-center fw-bold display-5"
                        variants={containerVars}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: false, amount: 0.4 }}
                        style={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            justifyContent: 'center', 
                            color: '#0dcaf0',
                            margin: 0
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
                    </motion.h1>
                </div>
                <div className="underline mx-auto mb-5"></div>

                <Row className="g-4 mt-2">
                    {skillData.map((category, idx) => (
                        <Col lg={idx === 2 ? 12 : 6} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <div className="modern-skill-card">
                                <h4 className="category-title">
                                    <span className="title-dot"></span>
                                    {category.title}
                                </h4>
                                <div className="skills-grid">
                                    {category.skills.map((skill, sIdx) => (
                                        <motion.div 
                                            key={sIdx} 
                                            className="skill-item"
                                            whileHover={{ scale: 1.05, y: -5 }}
                                        >
                                            <span className="skill-icon-wrapper">{skill.icon}</span>
                                            <span className="skill-name">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Skills;