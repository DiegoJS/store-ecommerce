import React, {Component} from 'react'

class Contacto extends Component{

    render(){
        return (
            <div>
                <h1 align="center">Contacto</h1>
                <p align="center">¿Tienes un nuevo proyecto? ¿Necesitas asesoría o quieres sugerir un tema?</p>
                <div className="row">
                    <div className="col-md-8">
                        <div className="form-group">
                            <input type="text" name="nombre" className="form-control"  placeholder="Nombre"/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="text" name="asunto" className="form-control" placeholder="Asunto" />
                        </div>
                        <div className="form-group">
                            <textarea name="mensaje" rows="5" className="form-control" placeholder="Mensaje"></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-outline-success">ENVIAR</button>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-unstyled">
                            <li>
                                <h5>Envíanos un mensaje</h5>
                                <p>info@mundodelaweb.com</p>
                                <p>(+51) 999888777</p>
                            </li>
                            <li>
                                <h5>Síguenos</h5>
                                <ul className="list-inline list-socials-network">
                                    <li className="list-inline-item">
                                    <a href="https://facebook.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="https://google.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-google-plus-g"></i>
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="https://instagram.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    </li>
                                    <li className="list-inline-item">
                                    <a href="https://skype.com" rel="noopener noreferrer" target="_blank">
                                        <i className="fab fa-skype"></i>
                                    </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacto