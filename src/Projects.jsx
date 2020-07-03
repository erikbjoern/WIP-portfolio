import React, { Component } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { UndrawDashboard } from "react-undraw-illustrations";

class Projects extends Component {
  state = {
    projects: [],
  };

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map((project) => {
        return (
          <div
            className="ui card"
            id={`project-${project.id}`}
            key={project.id}
          >
            <ProjectCard project={project} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container" style={{marginTop: "100px"}}>
        <div className="ui stackable two column grid">
          <div className="column">
            <h1 id="projects-header" className="ui header">
              My Projects
            </h1>
            <p>
              These projects were made during the Craft Academy bootcamp.{" "}
              <br></br>
              "Rock Paper Scissors!" was developed as a solo project, <br></br>
              the others as team projects.
            </p>
          </div>
          <div className="column">
            <UndrawDashboard primaryColor="#12283a" height="200px" />
          </div>
        </div>

        <div className="ui stackable four column grid cards">
          {projectsList}
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get("./src/data/projects.json").then((response) => {
      this.setState({
        projects: response.data,
      });
    });
  }
}

export default Projects;
