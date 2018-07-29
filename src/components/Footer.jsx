import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = (props) => (
    <footer className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-sm-3 col-xs-12">
                    <h4>products
                        <button type="button" className="toggle collapsed" data-toggle="collapse" data-target="#fproduct"></button>
                    </h4>
                    <ul id="fproduct" className="site-footer__links footer-collapse collapse show list-unstyled">
                        <li><Link to="#">Bestsell Product</Link></li>
                        <li><Link to="#">Featured Product</Link></li>
                        <li><Link to="#">New Product </Link></li>
                    </ul>
                </div>
                <div className="col-sm-3 col-xs-12 footcont">
                    <h4>Contact us <button type="button" className="toggle collapsed" data-toggle="collapse" data-target="#fcontact"></button></h4>
                    <div id="fcontact" className="footer-collapse collapse show">
                        <div className="address">
                            <p>
                                <i className="fa fa-map-marker"></i> demo store United States.
                            </p>
                            <p>
                                <i className="fa fa-phone"></i> 0123-456-789
                            </p>
                        </div>
                        <Link to="mailto:demo@demo.com">
                            <i className="fa fa-envelope"></i> demo@demo.com
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <p align="center" className="subtitle-footer">IdeasWebStore - Todos los derechos reservados © 2018</p>
                </div>
            </div>
        </div>
    </footer>

)

export default Footer