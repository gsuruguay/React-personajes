import React from 'react';
import Character from "../Character/Character"
import "./Home.css";

class Home extends React.Component {

    render() {
        return (
            <div className="container">        
            <div className="row">
                {this.props.characters.map(personaje => 
                    <Character personaje={personaje}/>
                    )}
            </div>
        </div>
        )
    }
}

export default Home;