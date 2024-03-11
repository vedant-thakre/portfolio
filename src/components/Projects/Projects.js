import React, { useEffect, useState } from "react";
import { ProjectsData, ProjectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Projects = () => {
  const [item, setItem] = useState({ name : 'all'});
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if(item.name === 'all'){
      setProjects(ProjectsData)
    }else {
      const newProjects = ProjectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({name : e.target.textContent});
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {ProjectsNav.map((item, index) => {
          return (
            <span className={`${active === index ? 'active-work' : ''} work__item`} key={index}
             onClick={(e) => {
              handleClick(e, index);
             }}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id}/>;
        })}
      </div>
    </div>
  );
};

export default Projects;
