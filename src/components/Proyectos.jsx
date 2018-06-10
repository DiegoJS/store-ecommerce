import React from 'react'
import './Proyectos.css'
import proyecto from '../img/project.jpg'
import { Link } from 'react-router-dom'

const Proyectos = (props) => (
    <div className="col-md-4">
        <div className="item-project">
            <span className="item-badge">PHP</span>
            <Link to="/proyecto/1/demo">
                <img alt="Proyecto" src={proyecto} className="img-fluid" />
            </Link>
            <div className="padd-10">
                <Link to="/proyecto/1/demo" className="project-title">
                    Proyecto de ejemplo demo
                </Link>
                <p className="text-gray">The best developer tools, free for students</p>
            </div>
        </div>
    </div>
)

export default Proyectos