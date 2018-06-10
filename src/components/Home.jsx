import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Proyectos from './Proyectos'
import Sliderimage from './../img/bg_website.png'
import './../App.css'


class Home extends Component {

    componentDidMount() {
        //if (ExecutionEnvironment.canUseDOM) {
        document.documentElement.addEventListener('scroll', this.handleScroll);
        //}
    }

    componentWillUnmount() {
        document.documentElement.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        //this.refs.nav.getDOMNode().style.top = document.documentElement.scrollTop + 'px';
        console.log(document.documentElement.scrollTop);
    }

    render() {
        return (
            <div className="App">
                <header>
                    <Header></Header>
                </header>
                <img alt="" src={Sliderimage} className="img-fluid" />
                <section className="section-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="h1">Proyectos</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    <Proyectos></Proyectos>
                                    <Proyectos></Proyectos>
                                    <Proyectos></Proyectos>
                                    <Proyectos></Proyectos>
                                    <Proyectos></Proyectos>
                                    <Proyectos></Proyectos>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h2 className="h3">Topicos</h2>
                                <h5 className="h5">Node.js</h5>
                                <p>Node.js is a tool for executing JavaScript in a variety of environments</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;