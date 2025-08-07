import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section id="projects" className="py-5 projects-section">
      <div className="container">
        <h2 className="projects-section-title fw-bold display-4 text-center">Projects</h2>
        <h5 className="text-center fw-normal fst-italic mb-4">A collection of projects I've worked on.</h5>
        <div className="underline mx-auto mb-5"></div>

        <div className="row g-4">
          {/* Project 1 */}
          <div className="col-lg-4 d-flex" data-aos="fade-up">
            <div className="card project-card shadow-sm h-100 w-100">
              <img src="/gym.jpg" className="card-img-top" alt="Gym Project" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Gym Service Integration</h4>
                <p className="card-text">
                  Red Muscle Fitness site features homepage, about, programs, location, BMI calculator, and a contact form.
                </p>
                <div className="text-center mt-auto">
                  <Button href="https://github.com/AllenDarson/main-fullstackproject" target="_blank" variant="success">Explore</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="card project-card shadow-sm h-100 w-100">
              <img src="/Sql.jpg" className="card-img-top" alt="SQL Project" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Salary Management System (IBM)</h4>
                <p className="card-text">
                  SQL-based salary system with CRUD operations, payroll analytics, and department-wise data handling.
                </p>
                <div className="text-center mt-auto">
                  <Button href="https://github.com/AllenDarson/SQL-Salary-Management-System-" target="_blank" variant="success">Explore</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="card project-card shadow-sm h-100 w-100">
              <img src="/port.jpg" className="card-img-top" alt="Portfolio" />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title">Personal Portfolio</h4>
                <p className="card-text">
                  A clean portfolio built with HTML, CSS, JavaScript, and Flask to showcase my work and skills.
                </p>
                <div className="text-center mt-auto">
                  <Button href="https://github.com/AllenDarson/Portfolio" target="_blank" variant="success">Explore</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <a
            href="https://github.com/AllenDarson"
            className="btn btn-primary github-btn"
            target="_blank"
            rel="noreferrer"
          >
            🔍 View More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
