import { Link, useParams } from 'react-router-dom'


function ProjectDetailsPage() {

    const { project_id } = useParams()

    /*
    const [foundProject, setFoundProject] = useState({})

    useEffect(() => {           // Simulación de API call actualizando el estado
        axios
            .get('http://example.com/api/projects/' + projectId)
            .then((response) => {
                setFoundProject(response.data);
            })
    }, [project_id])
    */


    return (
        <div>
            <h1>Detalles del proyecto con ID {project_id}</h1>
            <p>Pues ahora mandarías el ID {project_id} al backend y tal</p>
            <Link to="/projects">Volver</Link>
        </div>
    );
}

export default ProjectDetailsPage;