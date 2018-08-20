import React, {Component} from 'react'
import uid from 'uid'
import { Link } from 'react-router-dom'
import store from './../store'
import {removeFromCart} from './../actionCreators'
import Header from './Header'

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

	render(){
		//console.log(this.state.items);
		return(
			<div>
				<Header totalitems={this.state.items.length}></Header>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
						    <table className="table">
						    	<thead>
						    		<tr>
						    			<th>#</th>
						    			<th>Descripción</th>
						    			<th>Precio</th>
						    		</tr>
						    	</thead>
						    	<tbody>
						    		{
						    			this.state.items.map(item =>
								            <tr key={uid()}>
								              	<td>{item.id}</td>
								              	<td>{item.nombre}</td>
								              	<td><button className="btn btn-danger" onClick={() => this.eliminarProducto(item.id)}><i className="fa fa-trash"></i></button></td>
								            </tr>
							        	)
							        }
						    	</tbody>
						    </table>
						</div>
					</div>
			    </div>
			</div>
		)
	}
	
}

export default Carrito