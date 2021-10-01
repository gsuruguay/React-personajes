import React from 'react';
import "./About.css";

class About extends React.Component {

    render() {
        return (
            <div className="divAbout">
                <div className="row">
                    <div className="cont-Dev  ">
                        <img className="img-Dev" src="https://i.postimg.cc/vTKCqzLG/Guillermo-Suruguay-3-2.png" alt="Foto de Guillermo Suruguay" />
                    </div>
                    <div className="cont-Dev">
                        <h1>Guillermo Germán Suruguay</h1>
                        <p>Soy una persona con más de +5 años de experiencia liderando equipos de trabajo y +5 años de experiencia en atención al cliente y ventas, con enfoque siempre en el logro de objetivos. Busco insertarme en una empresa del sector IT como Programador Web Jr. donde pueda desarrollarme y aportar mis conocimientos, aptitudes comunicativas y de trabajo en equipo. Soy autodidacta, con fuerte capacidad de aprendizaje, entusiasmo y planificación.
                        </p>
                        <div className="icono">
                            <a href="https://www.linkedin.com/in/guillermo-suruguay-desarrollador-web" target="_blank" rel="noreferrer">
                            <img src="https://i.postimg.cc/HWSJWykH/icono-linkedin.png" alt="icono linkedin" /></a>
                        </div>
                    </div>
                </div>
                <footer>
                    <a href="https://www.linkedin.com/in/guillermo-suruguay-desarrollador-web" target="_blank" rel="noreferrer">Dev: Guilermo Suruguay</a>
                </footer>
            </div>
        )
    }
}

export default About;