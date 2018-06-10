import React from 'react'
import './Proyectos.css'
import { Link } from 'react-router-dom'


const Proyectos = (props) => (
    <div className="col-md-4">
        <div className="item-project">
            <span className="item-badge">PHP</span>
            <Link to={`proyecto/${props.id}/${props.name}`} >
                <img alt="Proyecto" src={props.image} className="img-fluid" />
            </Link>
            <div className="padd-10">
                <Link to={`proyecto/${props.id}/${props.name}`} className="project-title">
                    {props.name}
                </Link>
                <p className="text-gray">{props.description}</p>
            </div>
        </div>
    </div>
)

export default Proyectos