import React from 'react';
import "./Home.css";

class Home extends React.Component {

    render() {
        return (
            <div className="container">        
            <div className="row">
                {this.props.characters.map(personaje => 
                                <div key={personaje.id} className="cont-card">
                                <div className="card">
                                    <div className="card-body">
                                        <img src={personaje.photo} alt={`Imagen de ${personaje.name}`} />
                                        <h1>{personaje.name}</h1>
                                    </div>
                                </div>
                            </div>
                    )}
            </div>
        </div>
        )
    }
}

export default Home;