import React from 'react'
import Projects from './Projects';
import './project.css';

const Project = () => {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <Projects/>
    </section>
  );
}

export default Project