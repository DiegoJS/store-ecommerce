/* diegoJD*/
import React, {Component} from 'react'
import store from './../store'
import { Link } from 'react-router-dom'
import {removeFromCart} from './../actionCreators'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import Cartproductlist from './Cartproductlist'
import {connect} from 'react-redux'

class Carrito extends Component {
	
	constructor(props) {
        super();
        this.eliminarProducto = this.eliminarProducto.bind(this);
        this.state = {
			items: store.getState().cart,
	    }
    }

    eliminarProducto(id){
		removeFromCart(id);
	}

	componentDidMount() {

		store.subscribe(() => {
			this.setState({
				items: store.getState().cart
			})
		})
	}

	render() {
		if(this.props.productos > 0){
			return(
				<div>
					<Header totalitems={this.state.items.length}></Header>
					<Navbar></Navbar>
					<section className="section-carrito pt-4 pb-4">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<Cartproductlist productos={this.state.items} eliminarProducto={this.eliminarProducto}></Cartproductlist>
								</div>
							</div>
						</div>
					</section>
					<Footer></Footer>
				</div>
			)
		}
		else{
			return(
				<div>
					<Header totalitems={this.state.items.length}></Header>
					<Navbar></Navbar>
					<section className="section-carrito pt-4 pb-4">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="alert alert-warning">
										Carrito de compras vacío
								</div>
								</div>
								<div className="col-md-12 text-right">
									<Link to="/productos" className="btn btn-light">SEGUIR COMPRANDO</Link>
								</div>
							</div>
						</div>
					</section>
					<Footer></Footer>
				</div>
			)
		}
	}
	
}

export default connect()(Carrito)