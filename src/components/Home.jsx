import React, {Component} from 'react'
import uid from 'uid'
import Header from './Header'
import Footer from './Footer'
import Proyectos from './Proyectos'
import Contacto from './Contacto'
import Portafolio from './Portafolio'
import LazyLoad from 'react-lazyload'
import Sliderimage from './../img/bg_website.png'
import developicona from './../img/development.png'
import developiconb from './../img/dashboard.png'
import developiconc from './../img/network.png'
import './../App.css'

class Home extends Component {

    constructor(props){
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

    handleContacto(event){
        event.preventDefault();
        this.setState({ 
            contactoNombre: '',
            contactoEmail: '',
            contactoAsunto: '',
            contactoMensaje: '',
        });
        console.log('enviado');
    }
    changeContactoNombre(event){
        this.setState({ contactoNombre: event.target.value });
    }
    changeContactoEmail(event){
        this.setState({ contactoEmail: event.target.value });
    }
    changeContactoAsunto(event){
        this.setState({ contactoAsunto: event.target.value });
    }
    changeContactoMensaje(event){
        this.setState({ contactoMensaje: event.target.value });
    }

    render() {
        return (
            <div className="App">
                <header>
                    <Header></Header>
                </header>
                <section className="sectionSlider">
                    <div className="img-slider-home" style={{ 'background': 'url('+Sliderimage+')', 'backgroundPosition': 'center', backgroundSize:'cover'}}>
                        <div className="title-slider">
                            <h4>Desarrollo web profesional <span className="animate-code">|</span></h4>
                            <h5 className="subitle-slider">Realiza tu proyecto con buenas ideas</h5>
                            <a href="#contacto" className="btn-contacto-home">Portafolio</a>
                        </div>
                    </div>
                </section>
                <section className="section-nosotros">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h2 align="center">¿Quienes somos y que hacemos?</h2>
                                <br />
                                <p align="center">
                                    Somos un equipo de trabajo que se dedica al desarrollo e implementación de soluciones informáticas, tenemos el gusto de haber trabajado empresas grandes y pequeñas, lo que nos ha dado una mejor visión de las principales necesidades a su vez esto nos ha brindado la oportunidad de aprender nuevas formas de afrontarlos con éxito.
                                </p>
                                {/* <p align="center">Ante la creciente demanda de soluciones, es necesario que los profesionales en este campo tengan a la mano mejores herramientas y propuestas que los distingan del resto. Es por ello que decidimos formar un blog en donde iremos compartiendo información y casos prácticos para un mejor entendimiento de cada una de las tecnologías.</p> */}
                                <p>&nbsp;</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4" align="center">
                                <LazyLoad once height={200}>
                                    <img src={developicona} alt="Icono" className="desarrollo_web img-fluid"/>
                                </LazyLoad>
                                <h4 className="title-servicio">Software a medida</h4>
                            </div>
                            <div className="col-md-4" align="center">
                                <LazyLoad once height={200}>
                                <img src={developiconc} alt="Icono" className="desarrollo_web img-fluid" />
                                </LazyLoad>
                                <h4 className="title-servicio">Desarrollo web y móvil</h4>
                            </div>
                            <div className="col-md-4" align="center">
                                <LazyLoad once height={200}>
                                <img src={developiconb} alt="Icono" className="desarrollo_web img-fluid" />
                                </LazyLoad>
                                <h4 className="title-servicio">SEO y posicionamiento</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-portafolio">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Portafolio></Portafolio>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="h2" align="center">Nuestras Publicaciones</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    {
                                        this.props.data.map((item, i) => {
                                            return <LazyLoad once height={200} key={uid()} ><Proyectos key={uid()} id={item.id} name={item.name} languaje={item.languaje} description={item.description} image={item.image}></Proyectos></LazyLoad>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h2 className="h3">Topicos</h2>
                                <h5 className="h5">Node.js</h5>
                                <p>Node.js is a tool for executing JavaScript in a variety of environments</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-contacto">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 col-md-12 offset-lg-1 offset-xl-2">
                                <p>&nbsp;</p>
                                <Contacto 
                                    handleContacto={this.handleContacto} 
                                    changeContactoNombre={this.changeContactoNombre} 
                                    changeContactoEmail={this.changeContactoEmail} 
                                    changeContactoAsunto={this.changeContactoAsunto} 
                                    changeContactoMensaje={this.changeContactoMensaje} 
                                    contactoNombre={this.state.contactoNombre} 
                                    contactoEmail={this.state.contactoEmail} 
                                    contactoAsunto={this.state.contactoAsunto} 
                                    contactoMensaje={this.state.contactoMensaje} 
                                    >
                                </Contacto>
                                <p>&nbsp;</p>
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