import { Link, useSearchParams } from 'react-router-dom'

function ResultsPage() {

    const [searchParams, setSearchParams] = useSearchParams()

    const size = searchParams.get("talla")
    const color = searchParams.get("color")

    return (
        <div>
            <h1>Resultados!</h1>
            <hr></hr>
            <p>Debes enviar a la API los valores "{size}" para TALLA y "{color}" para color :D</p>

            <Link to="/">Volver al incio</Link>

        </div>
    );
}

export default ResultsPage;