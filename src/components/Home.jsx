import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
/*
import uid from 'uid'
import Proyectos from './Proyectos'
import Contacto from './Contacto'
import LazyLoad from 'react-lazyload'
import Sliderimage from './../img/bg_website.png'
import developicona from './../img/development.png'
import developiconb from './../img/dashboard.png'
import developiconc from './../img/network.png' */
import './../App.css'
import imgSlider from './../img/slider1.jpg'

class Home extends Component {

    constructor(props) {
        super();

        this.state = {
            contactoNombre: '',
            contactoEmail: '',
            contactoAsunto: '',
            contactoMensaje: '',
        }

        this.handleContacto = this.handleContacto.bind(this);
        this.changeContactoNombre = this.changeContactoNombre.bind(this);
        this.changeContactoEmail = this.changeContactoEmail.bind(this);
        this.changeContactoAsunto = this.changeContactoAsunto.bind(this);
        this.changeContactoMensaje = this.changeContactoMensaje.bind(this);

    }

    handleContacto(event) {
        event.preventDefault();
        this.setState({
            contactoNombre: '',
            contactoEmail: '',
            contactoAsunto: '',
            contactoMensaje: '',
        });
        console.log('enviado');
    }
    changeContactoNombre(event) {
        this.setState({ contactoNombre: event.target.value });
    }
    changeContactoEmail(event) {
        this.setState({ contactoEmail: event.target.value });
    }
    changeContactoAsunto(event) {
        this.setState({ contactoAsunto: event.target.value });
    }
    changeContactoMensaje(event) {
        this.setState({ contactoMensaje: event.target.value });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <Header></Header>
                </header>
                <section className="section-home">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <ul className="list-group">
                                    <span className="list-group-item">Categorias</span>
                                    <Link to="#" className="list-group-item">Cras justo odio</Link>
                                    <Link to="#" className="list-group-item">Dapibus ac facilisis in</Link>
                                    <Link to="#" className="list-group-item">Morbi leo risus</Link>
                                    <Link to="#" className="list-group-item">Porta ac consectetur ac</Link>
                                    <Link to="#" className="list-group-item">Vestibulum at eros</Link>
                                </ul>
                                <br />
                                <div className="card">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="Email">Newsletter</label>
                                            <input type="email" placeholder="Email" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-primary">Suscribirme</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-8">
                                        <img src={ imgSlider } alt="slider" className="img-fluid" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="media">
                                                    <img className="mr-3" width="62" src={ imgSlider } alt="Generic placeholder producto" />
                                                    <div className="media-body">
                                                        <h6 className="mt-0">Media heading</h6>
                                                        <p>Cras sit amet nibh libero.</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <img className="mr-3" width="62" src={imgSlider} alt="Generic placeholder producto" />
                                                    <div className="media-body">
                                                        <h6 className="mt-0">Media heading</h6>
                                                        <p>Cras sit amet nibh libero.</p>
                                                    </div>
                                                </div>
                                                <div className="media">
                                                    <img className="mr-3" width="62" src={imgSlider} alt="Generic placeholder producto" />
                                                    <div className="media-body">
                                                        <h6 className="mt-0">Media heading</h6>
                                                        <p>Cras sit amet nibh libero.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="contenedor-productos">
                                            <nav>
                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Ofertas</a>
                                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Novedades</a>
                                                </div>
                                            </nav>
                                            <div className="tab-content" id="nav-tabContent">
                                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="card">
                                                                <img className="card-img-top" src={imgSlider} alt="Card producto cap" />
                                                                <div className="card-body">
                                                                    Producto a
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="card">
                                                                <img className="card-img-top" src={imgSlider} alt="Card producto cap" />
                                                                <div className="card-body">
                                                                    Producto a
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="card">
                                                                <img className="card-img-top" src={imgSlider} alt="Card producto cap" />
                                                                <div className="card-body">
                                                                    Producto a
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;