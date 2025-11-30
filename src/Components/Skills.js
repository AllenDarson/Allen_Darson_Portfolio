import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
// Icons
import { FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import { SiBootstrap, SiMysql, SiFlask, SiDjango} from "react-icons/si";

import { RiJavascriptLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { AiOutlineHtml5 } from "react-icons/ai";

import "../Css/Skills.css";


const Skills = () => {
   useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <section id="skills" className="py-5">
       
      <Container>
        <h1 className="text-center fw-bold ">SKILLS</h1>
        {/* <p className="text-center text-secondary fst-italic">
          A collection of my technical skills and expertise honed through various projects
        </p> */}
         <h5 className="text-center fw-normal fst-italic mb-4">A collection of my technical skills and expertise honed through various projects</h5>
         <div className="underline mx-auto mb-4"></div>

        <Row className="g-4 mt-4">
          {/* Frontend */}
          <Col md={6} lg={6}>
            <div className="skills-card"data-aos="zoom-in">
              <h4 className="text-info">Frontend</h4>
              <div className="skills-list">
                 <span><AiOutlineHtml5 className="html-icon" /> HTML</span>
                <span><FaCss3Alt className="css-icon" /> CSS</span>
                {/* <span><RiJavascriptLine className="js-icon" /> JavaScript</span> */}
                <span><FaReact className="react-icon" /> React</span>
                <span><SiBootstrap className="bootstrap-icon" /> Bootstrap</span>
              </div>
            </div>
          </Col>

          {/* Backend */}
          <Col md={6} lg={6}>
            <div className="skills-card"data-aos="zoom-in">
              <h4 className="text-info">Backend</h4>
              <div className="skills-list">
                <span><FaPython className="python-icon" /> Python</span>
                <span><SiFlask className="flask-icon" /> Flask</span>
                <span><SiDjango className="django-icon" /> Django</span>
                <span><SiMysql className="mysql-icon" /> MySQL</span>
              </div>
            </div>
          </Col>

          {/* Languages */}
          <Col md={6} lg={6}>
            <div className="skills-card"data-aos="zoom-in">
              <h4 className="text-info">Languages</h4>
              <div className="skills-list">
                <span><FaPython className="python-icon" /> Python</span>
                <span><RiJavascriptLine className="js-icon" /> JavaScript</span>
              </div>
            </div>
          </Col>

          {/* Tools */}
          <Col md={6} lg={6}>
            <div className="skills-card"data-aos="zoom-in">
              <h4 className="text-info">Tools</h4>
              <div className="skills-list">
                 <span><FaGitAlt className="git-icon" /> Git</span>
                <span><FaGithubSquare className="github-icon" /> GitHub</span>
                <span><VscVscode className="vscode-icon" /> VS Code</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    
    </section>
  );
};

export default Skills;
