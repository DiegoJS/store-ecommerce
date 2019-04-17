import React, { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

class Contacto extends Component {
    constructor(props) {
        super();
        this.state = {
            cartItems:0,
        }
    }
    render() {
        return (
            <div>
                <header>
                    <Header totalitems={this.state.cartItems}></Header>
                </header>
                <Navbar></Navbar>
                <section className="section-contacto pt-4 pb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 align="center">Contacto</h2>
                                <p align="center">¿Tienes una consulta o alguna sugerencia?</p>
                                <div className="row">
                                    <div className="col-md-8">
                                        <form onSubmit={this.props.handleContacto}>
                                            <div className="form-group">
                                                <input type="text" name="nombre" value={this.props.contactoNombre} onChange={this.props.changeContactoNombre} className="form-control" placeholder="Nombre" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="email" value={this.props.contactoEmail} onChange={this.props.changeContactoEmail} className="form-control" placeholder="Email" required />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" name="asunto" value={this.props.contactoAsunto} onChange={this.props.changeContactoAsunto} className="form-control" placeholder="Asunto" required />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="mensaje" rows="5" value={this.props.contactoMensaje} onChange={this.props.changeContactoMensaje} className="form-control" placeholder="Mensaje" required></textarea>
                                            </div>
                                            <div className="form-group text-center">
                                                <button type="submit" className="btn btn-warning">ENVIAR</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-4">
                                        <ul className="list-unstyled">
                                            <li>
                                                <h5>Envíanos un mensaje</h5>
                                                <p>diego.g20x@gmail.com</p>
                                                <p>(+51) 999944444</p>
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
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        )
    }
}

export default Contacto