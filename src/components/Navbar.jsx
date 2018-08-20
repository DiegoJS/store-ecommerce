import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#"><i className="fa fa-home"></i></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Productos <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Ofertas</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Novedades</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/">Contacto</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;