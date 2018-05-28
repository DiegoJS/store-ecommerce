import React from 'react'
import './Footer.css'

const Footer = (props) => (

    <footer className="footer-section">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <p className="subtitle-footer">+ 044555588</p>
                    <p className="subtitle-footer">info@torbara.com</p>
                    <p className="subtitle-footer">121 King Street, Melbourne Victoria Australia</p>
                </div>
                <div className="col-md-6">
                    <p className="subtitle-footer">Quisque faucibus eu sapien vel tellus hendrerit</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p align="center" className="subtitle-footer">Todos los derechos reservados © 2018</p>
                </div>
            </div>
        </div>
    </footer>

)

export default Footer