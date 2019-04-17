import React, { Component } from 'react'
import axios from 'axios';
import Header from './Header'
import Footer from './Footer'
import Producto from './Producto'
import Newsletter from './Newsletter'
import Navbar from './Navbar'
import { addToCart } from './../actionCreators'
import Categorias from './Categorias';
import uid from 'uid'
import './../App.css'
import imgSlider from './../img/slider-2.jpg'
import store from '../store'
import {connect} from 'react-redux'

class Home extends Component {

    constructor() {
        super();

        this.state = {
            contactoNombre: '',
            contactoEmail: '',
            contactoAsunto: '',
            contactoMensaje: '',
            products: [],
            categories: [],
            cartItems: 0,
        }

        this.handleContacto = this.handleContacto.bind(this);
        this.changeContactoNombre = this.changeContactoNombre.bind(this);
        this.changeContactoEmail = this.changeContactoEmail.bind(this);
        this.changeContactoAsunto = this.changeContactoAsunto.bind(this);
        this.changeContactoMensaje = this.changeContactoMensaje.bind(this);
        this.addCart = this.addCart.bind(this);

    }

    handleContacto(event) {
        event.preventDefault();
        this.setState({
            contactoNombre: '',
            contactoEmail: '',
            contactoAsunto: '',
            contactoMensaje: '',
        });
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
    componentDidMount() {

        store.subscribe(() => {
            this.setState({
                cartItems: store.getState().cart.length
            })
        })

        axios.get('http://127.0.0.1/store/api/getProductos')
        .then(res => {
            this.setState({ products: res.data.productos });
        })

        axios.get('http://127.0.0.1/store/api/getCategorias')
        .then(res => {
            this.setState({ categories: res.data.categorias });
        })
        
    }

    addCart(product_id){
        let product_add = this.state.products.filter(item => item.id === product_id);
        addToCart(product_add);
    }

    render() {
        return (
            <div className="App">
                <header>
                    <Header totalitems={this.state.cartItems}></Header>
                </header>
                <Navbar></Navbar>
                <section className="section-home">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <Categorias categories={this.state.categories}></Categorias>
                                <br />
                                <Newsletter></Newsletter>
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-8">
                                        <img src={ imgSlider } alt="slider" className="img-fluid" />
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card">
                                            <div className="card-body">
                                                {
                                                    this.state.products.map(function (item, i) {
                                                        return(
                                                            <div className="media" key={uid()}>
                                                                <img className="mr-3" width="62" src={imgSlider} src={'http://127.0.0.1/store/uploads/productos/' + item.imagen} alt={item.nombre}/>
                                                                <div className="media-body">
                                                                    <h6 className="mt-0">{item.nombre}</h6>
                                                                    <p>Cras sit amet nibh libero.</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
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
                                                    <Producto addcart={this.addCart} productos={this.state.products}></Producto>
                                                </div>
                                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                    <Producto addcart={this.addCart} productos={this.state.products}></Producto>
                                                </div>
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

export default connect()(Home);