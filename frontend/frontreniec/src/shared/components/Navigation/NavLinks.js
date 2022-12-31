import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavLinks.css'

const NavLinks = props => {
    return (
    <ul className="nav-links">
        <li>
            <NavLink to = "/services" exact> BUSQUEDA</NavLink>
        </li>
        <li>
            <NavLink to = "/auth" exact> AUTHENTICATE</NavLink>
        </li>
    </ul>
    )
}

export default NavLinks