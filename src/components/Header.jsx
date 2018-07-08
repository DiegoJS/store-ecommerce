import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {

    constructor(...props) {
        super()
        this.state = {
            scrollactive: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        //this.refs.nav.getDOMNode().style.top = document.documentElement.scrollTop + 'px';
        let scrolltop = document.documentElement.scrollTop;
        let scrollactive = this.state.scrollactive;

        if (scrolltop > 50 && !scrollactive) {
            this.setState({
                scrollactive: true,
            });
        }
        else if (scrolltop <= 50 && scrollactive) {
            this.setState({
                scrollactive: false,
            });
        }

    }

    render() {

        let menu_activo = '';

        if (this.state.scrollactive) {
            menu_activo = 'navbar navbar-expand-lg navbar-dark fixed-top bg-dark';
        }
        else {
            menu_activo = 'navbar navbar-expand-lg navbar-dark fixed-top';
        }

        return (
            <div>
                <nav className={menu_activo}>

                    <div className="container">
                        <Link className="navbar-brand" to="/">IdeasWebStore</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Inicio <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/user">Publicaciones</Link>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                {/* <input className="form-control mr-sm-2" type="search" placeholder="Ingresa un tema" aria-label="Buscar" /> */}
                                {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button> */}
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header