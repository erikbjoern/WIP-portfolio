import React, { Component } from "react"
import axios from "axios"

class Projects extends Component { 
    state = {
        projects: []
    }
    
    
    render() { 
        const projects = this.state.projects
        let projectsList

        if (projects.length > 0) {
            projectsList = projects.map(project => {
                return ( 
                    <div id={`project-${project.id}`} key={project.id}>
                        <h3 className="ui header">{project.name}</h3>
                        <img className="image" src={project.image} alt="image"/>
                        <p className="description">{project.description}</p>
                    </div>
                )
            })
        }
        
        return (
            <div className="ui main container">
                <h1 id="projects-header" className="ui header">My Projects</h1>
                {projectsList}
            </div>
        )
    }
    
    componentDidMount() {
        axios.get('./src/data/projects.json')
            .then(response => {
                this.setState({
                    projects: response.data
                })
            })
    }
}

export default Projects