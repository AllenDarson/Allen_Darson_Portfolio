import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "../Css/Project.css";
import { motion } from 'framer-motion';

// Swiper Imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  const text = "Featured Projects";

  const containerVars = {
    initial: {},
    animate: { transition: { staggerChildren: 0.04 } }
  };

  const letterVars = {
    initial: { opacity: 0, y: 80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  // Data array to make the code cleaner
  const projectData = [
     {
      title: "Google Task-Style To-Do Web App",
      img: "/to_do_task.png",
      desc: "This is a simple and responsive task management app built using React JS. The interface closely resembles Google Tasks, allowing users to add, edit, delete, and star their daily tasks in an intuitive way.",
      github: "https://github.com/AllenDarson/To-do-list-Task",
      live:"https://allendarson.github.io/To-do-list-Task/"
    },
    
     {
      title: "KickEdge – Retro Football Jersey Landing Page",
      img: "/Football_landing_page.png",
      desc: "A modern, responsive landing page built using React + Vite, featuring a clean UI, product sections, and smooth animations. This project is designed as a showcase landing page for a football jersey brand called KickEdge.",
      github: "https://github.com/AllenDarson/football_jersey_landing_page",
      live:"https://football-jersey-landing-page.onrender.com"
    },
     {
      title: "Personal Portfolio",
      img: "/portfolio.png",
      desc: "A clean portfolio built with React.js, CSS and React Bootstrap to showcase my work and skills.",
      github: "https://github.com/AllenDarson/Portfolio",
      live:"https://allen-darson-portfolio.onrender.com"
    },
    {
      title: "Powerhouse Fitness (E-commerce)",
      img: "/gym_kart.png",
      desc: "Engineered a secure, full-stack e-commerce solution (Django/SQL) for gym products, featuring role-based access control and CRUD management.",
      github: "https://github.com/AllenDarson/ecommerce_django",
      live:"https://github.com/AllenDarson/ecommerce_django"
    },
    
    {
      title: "Salary Management System (IBM)",
      img: "/Sql.jpg",
      desc: "SQL-based salary system with CRUD operations, payroll analytics, and department-wise data handling.",
      github: "https://github.com/AllenDarson/SQL-Salary-Management-System-",
      live:"https://github.com/AllenDarson/SQL-Salary-Management-System-"
    },
   
   
  ];

  return (
    <section id="projects" className="py-5 projects-section">
      <div className="container">
        <div className="about-wrapper">
          <div style={{ overflow: 'hidden', padding: '15px 0' }}> 
            <motion.h2 
              className="projects-section-title fw-bold display-4 text-center"
              variants={containerVars}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false, amount: 0.4 }}
              style={{ display: 'flex', justifyContent: 'center', color: 'rgb(13, 202, 240)',margin: 0,whiteSpace: 'nowrap' }}
            >
              {text.split("").map((char, index) => (
                <motion.span key={index} variants={letterVars} style={{ display: 'inline-block' }}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h2>
          </div>
          <div className="underline mx-auto mb-5"></div>

          {/* --- CAROUSEL START --- */}
          <div className="project-carousel-container">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={3}      /* Shows 3 projects at a time */
              slidesPerGroup={1}     /* Moves 1 project at a time */
              loop={true}
              navigation={{
                nextEl: '.video-next',
                prevEl: '.video-prev',
              }}
              pagination={{
                el: '.video-pagination',
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              breakpoints={{
                // Responsive breakpoints
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="mySwiper"
            >
              {projectData.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="card project-card shadow-sm h-100 w-100">
                    <img src={item.img} className="card-img-top" alt={item.title} />
                    <div className="card-body d-flex flex-column">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-text">{item.desc}</p>
                      
                      <div className="text-center mt-auto custom-button-group">
                        <a href={item.github} target="_blank" rel="noopener noreferrer" className="animated-button github-btn">
                          <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                              <FaGithub size={18} className="icon" />
                            </div>
                          </div>
                          <span>GitHub</span>
                        </a>

                        <a href={item.live} target="_blank" rel="noopener noreferrer" className="animated-button demo-btn">
                          <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                              <FaExternalLinkAlt size={18} className="icon" />
                            </div>
                          </div>
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Video-Style Navigation Controls */}
            <div className="video-controls-wrapper">
              <div className="video-prev"><FaChevronLeft /></div>
              <div className="video-pagination"></div>
              <div className="video-next"><FaChevronRight /></div>
            </div>
          </div>
          {/* --- CAROUSEL END --- */}

          <div className="text-center mt-5">
            <a href="https://github.com/AllenDarson/Allen_Darson_Portfolio" className="btn githubs-btn" target="_blank" rel="noreferrer">
              <span className="btn-text">🔍 View More Projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;