import './App.css';
import Counter from './components/Counter/Counter'
import { useState } from 'react'
import Timer from './components/Timer/Timer'
import IronbnbList from './components/ApartmentsList/ApartmentsList'

function App() {

  const [show, setShow] = useState(true)

  return (
    <main className='App'>

      <h3>Listado de apartamentos</h3>
      <IronbnbList />

      <hr />

      <button onClick={() => setShow(!show)}> {show ? "Ocultar!" : "Mostrar!"} el contador manual y automático</button>

      <h3>Contador manual (usa useState)</h3>
      {show && <Counter />}

      <hr />

      <h3>Contador automático (usa useEffect)</h3>
      {show && <Timer />}



    </main>
  );
}

export default App;
