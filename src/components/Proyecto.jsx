import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

class Proyecto extends Component {

    constructor(props){
        super();

        //console.log(props);
        //console.log(props.match.params.id);
        //console.log(props.match.params.name);
    }

    render() {
        return (
            <div>
                <Header></Header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Proyecto {this.props.match.params.name}</h1>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default Proyecto