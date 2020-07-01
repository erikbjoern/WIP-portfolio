import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="ui segment" style={{ height: "100%" }}>
      <div style={{ height: "150px", display: "flex", alignItems: "center" }}>
        <div className="ui medium image">
          <a href={project.netlifyLink}>
          <img src={project.image} />
          </a>
        </div>
      </div>
      <div className="content">
        <br></br>
        <h3 className="ui header">{project.name}</h3>
        <div className="description">{project.description}</div>
        <div style={{position: "absolute", bottom: 3, right: 3}}>
        <a href={`${project.githubLink}#readme`}>
          <img
            id="github-link"
            src="./src/data/GitHub_Logo.png"
            height="20"
          ></img>
        </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
