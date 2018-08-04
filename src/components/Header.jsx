import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import store from '../store'

class Header extends Component {

    constructor(...props) {
        super()
        this.state = {
            total_items: 0
        }
        store.subscribe(() => {
            this.setState({
                total_items: store.getState().cart.length
            })
        })
    }

    render() {
        return (
            <div className="header-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="input-group">
                                <input type="text" className="form-control input-lg" placeholder="Buscar..." aria-label="Buscar..." aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary btn-lg" type="button">Buscar</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <Link to="/carrito" className="btn btn-default btn-lg"><i className="fas fa-shopping-bag"></i> Carrito ({this.state.total_items})</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header