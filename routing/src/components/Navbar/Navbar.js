import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="Navbar">
            <ul>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/about-me" className={({ isActive }) => isActive ? "selected" : ""}>Sobre mi</NavLink>
                </li>
                <li>
                    <NavLink to="/projects" className={({ isActive }) => isActive ? "selected" : ""}>Proyectos</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={({ isActive }) => isActive ? "selected" : ""}>Mi perfil</NavLink>
                </li>
                <li>
                    <NavLink to="/resultados?color=rojo&talla=M" className={({ isActive }) => isActive ? "selected" : ""}>Query Strings example</NavLink>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;