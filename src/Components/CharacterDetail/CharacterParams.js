import React from 'react';
import { useParams, useHistory } from 'react-router';

import personajes from "../../personajes.json";
import "./CharacterDetail.css";

export default function CharacterParams() {

    const params = useParams();
    const selected = personajes.Characters.find((element) => element.id === parseInt(params.id));

    const history = useHistory();
    const back = () => {
        history.push("/");
    };

    return (
        <div className="divDetail">
            <div>
                <div className="row">
                    <div className="cont-ImageDetail">
                        <img src={selected.photo} alt={`Imagen de ${selected.name}`} />
                    </div>
                    <div className="cont-Detail">
                        <h1>{selected.name}</h1>
                        <h4>{`Fullname: ${selected.fullname}`}</h4>
                        <p><strong>Occupation:</strong> {selected.occupation}</p>
                        <p><strong>Group affiliation:</strong> {selected.groupAffiliation}</p>
                        <ul> <strong>Aliases:</strong>
                            {selected.aliases.map(elem =>
                                <li>{elem}</li>
                            )}
                        </ul>
                        <ul> <strong>Relatives:</strong>
                            {selected.relatives.map(elem =>
                                <li>{elem}</li>
                            )}
                        </ul>
                        <button onClick={() => back()}>Back Home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}