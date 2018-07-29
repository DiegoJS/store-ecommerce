import React from 'react'
import uid from 'uid'

const Producto = (props) => (
    <div className="row">
        {
            props.productos.map(function (item, i) {
                let product_name = item.nombre.substr(0, 23);
                product_name = product_name + ((item.nombre.length > 23) ? '...' : '');
                return (
                    <div className="col-md-4" key={uid()}>
                        <div className="card">
                            <img className="card-img-top" height="180" src={'http://elfiko.com/elementi_admin/uploads/productos/' + item.imagen} alt={item.nombre} />
                            <div className="card-body">
                                <p>{product_name}</p>
                                <button className="btn btn-warning" onClick={(e) => props.addcart(item.id, e)}><i className="fas fa-shopping-cart"></i> Agregar</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
)

export default Producto