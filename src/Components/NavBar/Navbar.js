import React from 'react';
import "./Navbar.css";

class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nameEmpresa">
                        <span>REACT PERSONAJES</span>
                    </div>
                    <div className="linksNav">
                        <a href="#a">Detail</a>
                        <a href="#a">About</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;