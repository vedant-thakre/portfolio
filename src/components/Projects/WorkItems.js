import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className='work__desc'>{item.desc}</p>
      <div className="demo_git">
        <a href={item.github} className="work__button">
          Github |
        </a>{" "}
        <a href={item.demo} className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
}

export default WorkItems