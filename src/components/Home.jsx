import React, {Component} from 'react'
import uid from 'uid'
import Header from './Header'
import Footer from './Footer'
import Proyectos from './Proyectos'
import Contacto from './Contacto'
import Sliderimage from './../img/bg_website.png'
import './../App.css'

class Home extends Component {

    constructor(props){
        super();

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
                            <h4 className="">Desarrollo web</h4>
                            <a href="#contacto" className="btn-contacto-home">Contacto</a>
                        </div>
                    </div>
                </section>
                <section className="nosotros">
                    <div className="container">
                        <div className="col-md-8 offset-md-2">
                            <p>&nbsp;</p>
                            <h1 align="center">Qué hacemos</h1>
                            <br/>
                            <p align="center">
                                Diseñamos y desarrollamos marcas, campañas y proyectos digitales para empresas grandes y pequeñas. Combinamos el desarrollo web de marca y el diseño de experiencia de usuario para crear productos digitales memorables que la gente adora.
                            </p>
                            <p>&nbsp;</p>
                        </div>
                    </div>
                </section>
                <section className="section-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="h2">Cursos</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    {
                                        this.props.data.map((item, i) => {
                                            return <Proyectos key={uid()} id={item.id} name={item.name} languaje={item.languaje} description={item.description} image={item.image}></Proyectos>
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
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 col-md-12 offset-lg-1 offset-xl-2">
                                <p>&nbsp;</p>
                                <Contacto></Contacto>
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