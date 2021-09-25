import React from 'react';
import personajes from "../../personajes.json";
import "./CharacterDetail.css";

class CharacterDetail extends React.Component {

    state = {
        selected: []
    }

    onChangeSelect = (event) => {
        this.setState({
            selected: personajes.Characters.find(
                element => element.id === parseInt(event.target.value)
            ),
        });
    };

    render() {
        return (
            <div>
                <select onChange={(event) => this.onChangeSelect(event)} >
                    <option value="0" > Selecciona un personaje </option>
                    {personajes.Characters.map(personaje => {
                        return (
                            <option value={personaje.id}>
                                {personaje.name}
                            </option>
                        )
                    })}
                </select>
                <div>
                    {(this.state.selected == "" || this.state.selected == undefined) ?
                        <h2>No has seleccionado ningun personaje</h2>
                        : <div className="row">
                            <div className="cont-ImageDetail">
                                <img src={this.state.selected.photo} alt={`Imagen de ${this.state.selected.name}`} />
                            </div>
                            <div className="cont-Detail">
                                <h2>{this.state.selected.name}</h2>
                                <h4>{`Fullname: ${this.state.selected.fullname}`}</h4>
                                <p><strong>Occupation:</strong> {this.state.selected.occupation}</p>
                                <p><strong>Group affiliation:</strong> {this.state.selected.groupAffiliation}</p>
                                <ul> <strong>Aliases:</strong>
                                    {this.state.selected.aliases.map(elem => 
                                        <li>{elem}</li>
                                        )}
                                </ul>
                                <ul> <strong>Relatives:</strong>
                                    {this.state.selected.relatives.map(elem => 
                                        <li>{elem}</li>
                                        )}
                                </ul>
                            </div>
                        </div>
                    }

                </div>
            </div>
        )
    }
}

export default CharacterDetail;