import React, { Component } from 'react'

class Newsletter extends Component {
    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="Email">Newsletter</label>
                        <input type="email" placeholder="Email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-dark btn-block">Suscribirme</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsletter;