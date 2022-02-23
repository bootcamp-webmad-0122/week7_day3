
import { useState, useEffect } from "react"

function Timer() {

    const [count, setCount] = useState(0)


    useEffect(() => {

        console.log('Intervalo activado en montaje')

        const id = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000)


        return () => {
            console.log('Intervalo eliminado en desmontaje (cleanup function)')
            clearTimeout(id)

            document.title = 'React App'
        }

    }, [])



    useEffect(() => {
        console.log("Variable count actualizada")
        document.title = count
    }, [count])



    return (
        <div className="Timer">
            <h2>Timer</h2>

            <h3>{count}</h3>
        </div>
    );
}

export default Timer;