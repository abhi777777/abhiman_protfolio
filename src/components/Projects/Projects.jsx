import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
import Project from "./Project/Project";
import "./Project/Project.css";
import "./Projects.css";
import GithubProject from "./GithubProject/GithubProject";
import "./GithubProject/GithubProject.css";
import projects from "../../projects.json";
import { Link } from "react-router-dom";

const Projects = () => {
  // useEffect(() => {
  // AOS.init();
  // AOS.refresh();
  // }, []);
  return (
    <div id="projects" className="projects">
      {/* <div className="projectsgradient1"></div> */}
      {/* <div className="projectsgradient2"></div> */}
      <div className="projects__title heading">//Projects</div>
      <div className="projects__desc">
        I've developed a lot of personal side projects some, my favourites are
        as below:
      </div>
      <div className="projects__work">
        {projects.map((project) => (
          <Project
            tools={project.tools}
            name={project.name}
            desc={project.desc}
            github={`https://github.com/tanishqkrk/${project.github}`}
            img={`./${project.img}`}
            href={project.href}
          ></Project>
        ))}
      </div>
      <div className="githubProjects__title">
        Other projects you may find intersting!
      </div>
      <div className="github">
        <GithubProject
          name={"GoingDutch"}
          desc={
            "Our project is about designing An expense-sharing application where you can add your expenses and split them among different people. The Program keeps balances between people as in who owes how much to whom."
          }
          github={"https://github.com/tanishqkrk/randomjs"}
        ></GithubProject>
        <GithubProject
          name={"MyProtfolio"}
          desc={
            "This project is my own protfolio with alot of animations and an eye catching appereance created using ReactJS and vite ."
          }
          github={"https://github.com/tanishqkrk/Decimal-separator"}
        ></GithubProject>
      </div>
      <div className="moreProjects">
        {/* <Link to="/projects">Explore more</Link> */}
      </div>
    </div>
  );
};

export default Projects;
