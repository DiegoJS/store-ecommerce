import React from 'react'
import uid from 'uid'
import { Link } from 'react-router-dom'

const Categorias = (props) => (
    <ul className="list-group">
        <span className="list-group-item">Categorias</span>
        {
            props.categories.map((item) => {
                return (
                    <Link to="#" key={uid()} className="list-group-item">{item.nombre}</Link>
                )
            })
        }
    </ul>
)

export default Categorias