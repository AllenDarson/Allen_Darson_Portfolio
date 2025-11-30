import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import "../Css/Project.css";


const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="projects" className="py-5 projects-section">
      <div className="container">
        <div className="about-wrapper">
          <h2 className="projects-section-title fw-bold display-4 text-center">Projects</h2>
          <h5 className="text-center fw-normal fst-italic mb-4">A collection of projects I've worked on.</h5>
          <div className="underline mx-auto mb-5"></div>

          <div className="row g-4">
            {/* Project 1 */}
            <div className="col-lg-4 d-flex" data-aos="zoom-in-up">
              <div className="card project-card shadow-sm h-100 w-100">
                <img src="/to_do_task.png" className="card-img-top" alt="Gym Project" />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">Google Task-Style To-Do Web App</h4>
                  <p className="card-text">
                    This is a simple and responsive task management app built using React JS. The interface closely resembles Google Tasks, allowing users to add, edit, delete, and star their daily tasks in an intuitive way.
                  </p>
                  {/* <div className="text-center mt-auto">
                    <Button href="https://github.com/AllenDarson/ecommerce_django" target="_blank" variant="success">🔗 View Project Code</Button>
                  </div> */}

                  <div className="text-center mt-auto custom-button-group">
                    {/* GitHub Button */}
                    <a
                      href="https://github.com/AllenDarson/To-do-list-Task"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-button github-btn"
                    >
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          {/* ICON SIZE REDUCED TO 20 */}
                          <FaGithub size={18} className="icon" />
                        </div>
                      </div>
                      <span>GitHub</span>
                    </a>

                    {/* Live Demo Button */}
                    <a
                      href="https://allendarson.github.io/To-do-list-Task/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-button demo-btn"
                    >
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          {/* ICON SIZE REDUCED TO 20 */}
                          <FaExternalLinkAlt size={18} className="icon" />
                        </div>
                      </div>
                      <span>Live Demo</span>
                    </a>
                  </div>


                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="col-lg-4 d-flex" data-aos="zoom-in-up" data-aos-delay="100">
              <div className="card project-card shadow-sm h-100 w-100">
                <img src="/Football_landing_page.png" className="card-img-top" alt="SQL Project" />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">KickEdge – Retro Football Jersey Landing Page</h4>
                  <p className="card-text">
                    A modern, responsive landing page built using React + Vite, featuring a clean UI, product sections, and smooth animations. This project is designed as a showcase landing page for a football jersey brand called KickEdge.
                  </p>
                  {/* <div className="text-center mt-auto">
                    <Button href="https://github.com/AllenDarson/SQL-Salary-Management-System-" target="_blank" variant="success">🔗 View Project Code</Button>
                  </div> */}
                  <div className="text-center mt-auto custom-button-group">
                    {/* GitHub Button */}
                    <a
                      href="https://github.com/AllenDarson/football_jersey_landing_page"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-button github-btn"
                    >
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          {/* ICON SIZE REDUCED TO 20 */}
                          <FaGithub size={18} className="icon" />
                        </div>
                      </div>
                      <span>GitHub</span>
                    </a>

                    {/* Live Demo Button */}
                    <a
                      href="https://football-jersey-landing-page.onrender.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-button demo-btn"
                    >
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          {/* ICON SIZE REDUCED TO 20 */}
                          <FaExternalLinkAlt size={18} className="icon" />
                        </div>
                      </div>
                      <span>Live Demo</span>
                    </a>
                  </div>


                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="col-lg-4 d-flex" data-aos="zoom-in-up" data-aos-delay="200">
              <div className="card project-card shadow-sm h-100 w-100">
                <img src="/gym_kart.png" className="card-img-top" alt="Portfolio" />
                <div className="card-body d-flex flex-column">
                  <h4 className="card-title">Powerhouse Fitness (E-commerce)</h4>
                  <p className="card-text">
                    Engineered a secure, full-stack e-commerce solution (Django/SQL) for gym products, featuring role-based access control (Admin/Staff/Vendor/User) and comprehensive CRUD management. The platform offers seamless cart features and a responsive UI.

                  </p>
                  {/* <div className="text-center mt-auto">
                    <Button href="https://github.com/AllenDarson/Portfolio" target="_blank" variant="success">🔗 View Project Code</Button>
                  </div> */}
                  <div className="text-center mt-auto custom-button-group">
                    {/* GitHub Button */}
                    <a
                      href="https://github.com/AllenDarson/ecommerce_django"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-button github-btn"
                    >
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          {/* ICON SIZE REDUCED TO 20 */}
                          <FaGithub size={18} className="icon" />
                        </div>
                      </div>
                      <span>GitHub</span>
                    </a>

                    {/* Live Demo Button */}
                    <a
                      href="https://github.com/AllenDarson/ecommerce_django"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-button demo-btn"
                    >
                      <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                          {/* ICON SIZE REDUCED TO 20 */}
                          <FaExternalLinkAlt size={18} className="icon" />
                        </div>
                      </div>
                      <span>Live Demo</span>
                    </a>
                  </div>



                </div>
              </div>
            </div>
          </div>

          {/* <div className="text-center mt-5">
            <a
              href="https://github.com/AllenDarson/Allen_Darson_Portfolio"
              className="btn btn-primary github-btn"
              target="_blank"
              rel="noreferrer"
            >
              🔍 View More Projects on GitHub
            </a>
          </div> */}
          <div className="text-center mt-5">
            <a
              href="https://github.com/AllenDarson/Allen_Darson_Portfolio"
              className="btn  githubs-btn"
              target="_blank"
              rel="noreferrer"
            >
              🔍 View More Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;