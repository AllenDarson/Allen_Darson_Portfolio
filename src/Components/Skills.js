import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

import { FaPython, FaCss3Alt } from "react-icons/fa6";
import { SiMysql, SiFlask,SiDjango  } from "react-icons/si";

import { TiHtml5 } from "react-icons/ti";
import { DiJavascript } from "react-icons/di";

const Skills = () => {
 useEffect(() => {
     AOS.init({ duration: 1200 });
   }, []);

  return (
     <section id="skills">
      <div className="container text-center">
        <h1>Skills</h1>
        <h5>Technologies I work with</h5>
        <div className="underline mx-auto mb-4"></div>

        <Carousel controls={true} indicators={false} interval={3000}>
          <Carousel.Item>
  <div className="skill-card">
    <FaPython className="skill-icon python-icon" />
    <h4>Python</h4>
    <p>
      Python is my go-to language for backend development, data analysis, and automation.
      It's clean, powerful, and supports frameworks like Django and Flask for fast development.
    </p>
  </div>
</Carousel.Item>

<Carousel.Item>
  <div className="skill-card">
    <SiMysql className="skill-icon mysql-icon" />
    <h4>MySQL</h4>
    <p>
      MySQL helps me manage structured data efficiently. I use it to design databases, write optimized queries,
      and connect them to Python applications for full-stack solutions.
    </p>
  </div>
</Carousel.Item>

<Carousel.Item>
  <div className="skill-card">
    <SiFlask className="skill-icon flask-icon" />
    <h4>Flask</h4>
    <p>
      Flask is a lightweight Python web framework I use to build APIs and backend logic quickly.
      It's perfect for small projects and helps me understand how servers work.
    </p>
  </div>
</Carousel.Item>

<Carousel.Item>
  <div className="skill-card">
    <TiHtml5 className="skill-icon html-icon" />
    <h4>HTML5</h4>
    <p>
      HTML5 forms the structure of my web pages. I use semantic tags to build responsive layouts
      that are clean, SEO-friendly, and easy to maintain.
    </p>
  </div>
</Carousel.Item>

<Carousel.Item>
  <div className="skill-card">
    <FaCss3Alt className="skill-icon css-icon" />
    <h4>CSS3</h4>
    <p>
      CSS3 helps me style websites with beautiful layouts, animations, and responsive design.
      I enjoy experimenting with Flexbox, Grid, and transitions to bring life to the UI.
    </p>
  </div>
</Carousel.Item>

<Carousel.Item>
  <div className="skill-card">
    <DiJavascript className="skill-icon js-icon" />
    <h4>JavaScript</h4>
    <p>
      JavaScript helps me add logic, interactivity, and animations. From toggling menus to fetching APIs,
      it's the backbone of client-side functionality in my projects.
    </p>
  </div>
</Carousel.Item>

<Carousel.Item>
  <div className="skill-card">
    <SiDjango className="skill-icon django-icon" />
    <h4>Django</h4>
    <p>
      Django is a powerful Python web framework that allows me to build secure, scalable, and full-stack web apps rapidly.
    </p>
  </div>
</Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;