import React from 'react';
import "./Character.css";

class Character extends React.Component {

    render() {
        const {personaje} = this.props;
        return (
            <div key={personaje.id} className="cont-card">
                <div className="card">
                    <div className="card-body">
                        <img src={personaje.photo} alt={`Imagen de ${personaje.name}`} />
                        <h1>{personaje.name}</h1>
                    </div>
                </div>
            </div>

        )
    }
}

export default Character;