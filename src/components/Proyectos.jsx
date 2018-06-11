import React from 'react'
import './Proyectos.css'
import { Link } from 'react-router-dom'
import slugify from 'slugify'

const Proyectos = (props) => (
    <div className="col-md-4">
        <div className="item-project">
            <span className="item-badge">{props.languaje}</span>
            <Link to={`proyecto/${props.id}/${slugify(props.name, { replacement: '-', remove: null, lower: true })}`} >
                <div style={{ 'background': 'url(' + props.image + ')', 'backgroundSize': 'cover', 'height': '200px', 'backgroundRepeat': 'no-repeat', 'backgroundPosition': 'center', 'borderRadius': '5px 5px 0px 0px'}}></div>
            </Link>
            <div className="padd-10">
                <Link to={`proyecto/${props.id}/${slugify(props.name, {replacement: '-',remove: null,lower: true})}`} className="project-title">
                    {props.name}
                </Link>
                <p className="text-gray">{props.description}</p>
            </div>
        </div>
    </div>
)

export default Proyectos