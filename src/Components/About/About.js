import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import isValid from '../../utils';
import "./About.css";

export default function About() {

    const [state, setState] = useState({
        mail: "",
        subjet: "",
        message: ""
    })

    /* useEffect(() => {
        setFails(isValid(state))
      }, []) */

    const [fails, setFails] = useState({
        fails: {
            mail: "Mail is Required",
            subjet: "Subjet is Required",
            message: "Message is Required"
        }
    })

    function onSubmitForm(e) {
        e.preventDefault();
        /* alert(`el mail es ${state.mail}, el subjet es ${state.subjet} y el msg es ${state.message}`) */
    }

    function onHandleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        setFails(
            isValid({
                ...state,
                [e.target.name]: e.target.value
            })
        )
    }

    


    return (
        <>
            <Container className="cont-Dev">
                <h1>Guillermo Germán Suruguay</h1>
                <h3>Desarrollador Web FullStack </h3>
                <Row className="mt-4">
                    <Col className="text-center icono">
                        <img src="https://i.postimg.cc/qv4kV3mc/javascript-icon-130900.png" alt="icono" />
                        <img src="https://i.postimg.cc/wxRxhHyN/nodejs-original-wordmark-logo-icon-146412-1.png" alt="icono" />
                        <img src="https://i.postimg.cc/fTxwrKvT/php-icon-130857.png" alt="icono" />
                        <img src="https://i.postimg.cc/Gh0LKNG5/html-original-wordmark-logo-icon-146478.png" alt="icono" />
                        <img src="https://i.postimg.cc/PJDthzsy/file-type-css-icon-130661.png" alt="icono" />
                        <img src="https://i.postimg.cc/RFyMjp8q/mysql-original-wordmark-logo-icon-146417.png" alt="icono" />
                        <img src="https://i.postimg.cc/T30TR3Sz/mongo-DB-logo-icon-146412.png" alt="icono" />
                        <img src="https://i.postimg.cc/85jpXgZq/react-original-logo-icon-146374.png" alt="icono" />
                        <img src="https://i.postimg.cc/PqfrZwYf/bootstrap-plain-logo-icon-146619.png" alt="icono" />
                        <img src="https://i.postimg.cc/R0PCTZL7/git-original-wordmark-logo-icon-146510.png" alt="icono" />
                        <img src="https://i.postimg.cc/FHVH7Zfn/1485282157-adobe-photoshop-raster-graphics-editor-cc-creative-cloud-78285.png" alt="icono" />
                    </Col>
                    <Col>
                        <p>Soy una persona con más de +5 años de experiencia liderando equipos de trabajo en atención al cliente y ventas, con enfoque siempre en el logro de objetivos. Busco insertarme en una empresa del sector IT como Programador Web Jr. donde pueda desarrollarme y aportar mis conocimientos, aptitudes comunicativas y de trabajo en equipo. Soy autodidacta, con fuerte capacidad de aprendizaje, entusiasmo y planificación.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6}>
                        <img className="img-Dev" src="https://i.postimg.cc/vTKCqzLG/Guillermo-Suruguay-3-2.png" alt="Foto de Guillermo Suruguay" />
                    </Col>
                    <Col lg="6" className="mb-5 mt-5">
                        <Form onSubmit={(e) => onSubmitForm(e)}>
                            <h3>Contact me</h3>
                            <Form.Group className="mb-3" controlId="mail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="mail" placeholder="example@mail.com" onChange={(e) => onHandleChange(e)} />
                                {fails.mail ? <Form.Text style={{ color: "rgb(230, 86, 86)" }}>
                                    {fails.mail}
                                </Form.Text> : ""}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="subjet">
                                <Form.Label>Subjet</Form.Label>
                                <Form.Control type="text" name="subjet" placeholder="Message Subject" onChange={(e) => onHandleChange(e)} />
                                {fails.subjet ? <Form.Text style={{ color: "rgb(230, 86, 86)" }}>
                                    {fails.subjet}
                                </Form.Text> : ""}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="message">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" name="message" rows={3} onChange={(e) => onHandleChange(e)} />
                                {fails.message ? <Form.Text style={{ color: "rgb(230, 86, 86)" }}>
                                    {fails.message}
                                </Form.Text> : ""}
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={fails.mail || fails.subjet || fails.message ? true : false}>
                                Submit
                            </Button>
                        </Form >
                    </Col>
                </Row>
            </Container>
            <footer>
                <a href="https://www.linkedin.com/in/guillermo-suruguay-desarrollador-web" target="_blank" rel="noreferrer">Dev: Guilermo Suruguay </a>
            </footer>
        </>
    )
}
/* export default function About() {

    return (
        <div className="divAbout">
            <div className="row">
                <div className="cont-Dev  ">
                    <img className="img-Dev" src="https://i.postimg.cc/vTKCqzLG/Guillermo-Suruguay-3-2.png" alt="Foto de Guillermo Suruguay" />
                </div>
                <div className="cont-Dev">
                    <h1>Guillermo Germán Suruguay</h1>
                    <h3>Desarrollador Web FullStack <a href="https://www.linkedin.com/in/guillermo-suruguay-desarrollador-web" target="_blank" rel="noreferrer">
                        <img className="ico-In" src="https://i.postimg.cc/HWSJWykH/icono-linkedin.png" alt="icono linkedin" /></a></h3>

                    <p>Soy una persona con más de +5 años de experiencia liderando equipos de trabajo y +5 años de experiencia en atención al cliente y ventas, con enfoque siempre en el logro de objetivos. Busco insertarme en una empresa del sector IT como Programador Web Jr. donde pueda desarrollarme y aportar mis conocimientos, aptitudes comunicativas y de trabajo en equipo. Soy autodidacta, con fuerte capacidad de aprendizaje, entusiasmo y planificación.
                    </p>
                    <h3>Skills</h3>
                    <div className="icono">
                        <img src="https://i.postimg.cc/qv4kV3mc/javascript-icon-130900.png" alt="icono" />
                        <img src="https://i.postimg.cc/wxRxhHyN/nodejs-original-wordmark-logo-icon-146412-1.png" alt="icono" />
                        <img src="https://i.postimg.cc/fTxwrKvT/php-icon-130857.png" alt="icono" />
                        <img src="https://i.postimg.cc/Gh0LKNG5/html-original-wordmark-logo-icon-146478.png" alt="icono" />
                        <img src="https://i.postimg.cc/PJDthzsy/file-type-css-icon-130661.png" alt="icono" />
                        <img src="https://i.postimg.cc/RFyMjp8q/mysql-original-wordmark-logo-icon-146417.png" alt="icono" />
                        <img src="https://i.postimg.cc/T30TR3Sz/mongo-DB-logo-icon-146412.png" alt="icono" />
                        <img src="https://i.postimg.cc/85jpXgZq/react-original-logo-icon-146374.png" alt="icono" />
                        <img src="https://i.postimg.cc/PqfrZwYf/bootstrap-plain-logo-icon-146619.png" alt="icono" />
                        <img src="https://i.postimg.cc/R0PCTZL7/git-original-wordmark-logo-icon-146510.png" alt="icono" />
                        <img src="https://i.postimg.cc/FHVH7Zfn/1485282157-adobe-photoshop-raster-graphics-editor-cc-creative-cloud-78285.png" alt="icono" />
                    </div>
                </div>
            </div>
            <footer>
                <a href="https://www.linkedin.com/in/guillermo-suruguay-desarrollador-web" target="_blank" rel="noreferrer">Dev: Guilermo Suruguay </a>
            </footer>
        </div>
    )
}
 */

