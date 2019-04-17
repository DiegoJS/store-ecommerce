import React, { Component } from 'react'
import uid from 'uid'

class Cartproductlist extends Component {
    props(props){
    }
    render () {
        return(
            <div>
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
                            this.props.productos.map(item =>
                                <tr key={uid()}>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td><button className="btn btn-danger" onClick={() => this.props.eliminarProducto(item.id)}><i className="fa fa-trash"></i></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Cartproductlist;