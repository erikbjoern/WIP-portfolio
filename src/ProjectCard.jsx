import React from "react"

const ProjectCard = ({project}) => {
    return (
        <div className="ui segment" style={{height: '100%'}}>
                <div style={{height: '150px', display: 'flex', alignItems: 'center'}}>
                    <div className="ui medium image" >
                        <img src={project.image} />
                    </div>  
                </div>
                <div className="content">
                    <div></div>
                    <h3 className="ui header">{project.name}</h3>
                    <div className="description">{project.description}</div>
                </div>
            </div>   
    )
}

export default ProjectCard