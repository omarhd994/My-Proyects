import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {
  return (
    <header className='header'>
        <div className='logo'>
        <span>FullStack</span>
        <h3>Omar Haddia</h3>
        </div>
        <nav>
            <ul>
                <li>
                   <NavLink to="/Inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
                </li>
                <li>
                   <NavLink to="/Portafolio" className={({isActive}) => isActive ? "active" : ""}>Portafolio</NavLink>
                   </li>

                   <li>
                   <NavLink to="/Contacto" className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
                   </li>
                   <li>
                   <NavLink to="/CV" className={({isActive}) => isActive ? "active" : ""}>CV</NavLink>
                   </li>
                   <li>
                   <NavLink to="/Servicios" className={({isActive}) => isActive ? "active" : ""}>Servicios</NavLink>
                   </li>
                   
                 
            </ul>
        </nav>

    </header>
  )
}
