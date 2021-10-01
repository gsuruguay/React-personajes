import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Navbar.css";

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nameEmpresa">
                        <NavLink to="/">
                        <span>REACT PERSONAJES</span>
                        </NavLink>
                    </div>
                    <div className="linksNav">
                    <NavLink to="/charDetail">Character Detail</NavLink>
                    <NavLink to="/about">About</NavLink>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;