import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bxl-react about__icon"></i>
        <h3 className="about__title">Frontend</h3>
        <span className="about__subtitle">React Js, Next Js</span>
      </div>

      <div className="about__box">
        <i className="bx bxl-java about__icon"></i>
        <h3 className="about__title">Backend</h3>
        <span className="about__subtitle">Node, Mongo</span>
      </div>

      <div className="about__box">
        <i className="bx bxl-codepen about__icon"></i>
        <h3 className="about__title">DSA</h3>
        <span className="about__subtitle">C++, Python</span>
      </div>
    </div>
  );
}

export default Info
