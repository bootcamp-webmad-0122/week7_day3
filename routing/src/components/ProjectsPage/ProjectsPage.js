import { useState, useEffect } from "react"
import { Link } from "react-router-dom";


function ProjectsPage({ theProjects }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(theProjects);
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            <hr />
            {projects.map(project => {
                return (
                    <div key={project.id} className="project">
                        <h3>{project.name}</h3>
                        <p>{project.technologies}</p>

                        <Link to={`/projects/${project._id}`}>Ver detalles de proyecto con ID {project._id}</Link>

                        <hr />
                    </div>
                );
            })}
        </div>
    );
}

export default ProjectsPage;