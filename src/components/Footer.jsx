import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = (props) => (
    <footer className="footer-section pt-3">
        <div className="container">
            <div className="row">
                <div className="col-sm-3 offset-sm-6 col-xs-12">
                    <h5 className="mb-4">Menu</h5>
                    <ul className="site-footer__links footer-collapse collapse show list-unstyled">
                        <li><Link to="/productos">Productos</Link></li>
                        <li><Link to="/ofertas">Ofertas</Link></li>
                        <li><Link to="/novedades">Novedades</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
                <div className="col-sm-3 col-xs-12 footcont">
                    <h5 className="mb-4">Contacto </h5>
                    <div id="fcontact" className="footer-collapse collapse show">
                        <div className="address">
                            <ul className="list-unstyled">
                                <li>
                                    <i className="fa fa-map-marker"></i> Tienda Online.
                                </li>
                                <li>
                                    <i className="fa fa-phone"></i> +51 99995555
                                </li>
                                <li>
                                    <i className="fa fa-envelope"></i> diego.g20x@gmail.com
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p align="center" className="subtitle-footer mt-3">IdeasWebTec - Todos los derechos reservados © 2019</p>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer