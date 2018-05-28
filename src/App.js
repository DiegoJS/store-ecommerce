import React, { Component } from 'react';
import Proyectos from './components/Proyectos'
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Bienvenido React</h1>
        </header>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="h1">Proyectos</h2>
              </div>
            </div>
            <div className="row">
              <Proyectos></Proyectos>
              <Proyectos></Proyectos>
              <Proyectos></Proyectos>
              <Proyectos></Proyectos>
            </div>
          </div>
        </section>
      </div>

    );
  }
}

export default App;
