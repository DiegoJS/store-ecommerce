import React from 'react'
import './Proyectos.css'
import proyecto from '../img/project.jpg'

const Proyectos = (props) => (

    <div className="col-md-4">
        <div className="item-project">
            <img
                src={proyecto}
                className="img-fluid"
            />
            <div className="padd-10">
                <a href="#" className="project-title">
                    Proyecto de ejemplo demo
                </a>
                <p className="text-gray">The best developer tools, free for students</p>
            </div>
        </div>
    </div>

)

export default Proyectos