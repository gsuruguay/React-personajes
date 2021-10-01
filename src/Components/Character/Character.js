import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Character.css";

class Character extends React.Component {

    render() {
        const {personaje} = this.props;
        return (
            <div key={personaje.id} className="cont-card">
                <NavLink to={`/charDetail/${personaje.id}`}>
                <div className="card">
                    <div className="card-body">
                        <img src={personaje.photo} alt={`Imagen de ${personaje.name}`} />
                        <h1>{personaje.name}</h1>
                    </div>
                </div>
                </NavLink>
            </div>

        )
    }
}

export default Character;