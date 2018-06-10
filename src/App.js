import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'

import Home from './components/Home'
import Proyecto from './components/Proyecto'

class App extends Component {

  constructor(){
    super();

    console.log('ready');
    this.state = {
      items: [
        { id: 1, name: 'Producto 1', description: 'The best developer tools, free for students', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
        { id: 2, name: 'Producto 2', description: 'The best developer tools, free for students', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
        { id: 3, name: 'Producto 3', description: 'The best developer tools, free for students', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
        { id: 4, name: 'Producto 4', description: 'The best developer tools, free for students', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
        { id: 5, name: 'Producto 5', description: 'The best developer tools, free for students', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
        { id: 6, name: 'Producto 6', description: 'The best developer tools, free for students', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
        { id: 7, name: 'Producto 7', description: 'The best developer tools, free for students', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
        { id: 8, name: 'Producto 8', description: 'The best developer tools, free for students', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
      ]
    }

  }

  render() {
    return (
      <Router>
        <div>

          {/* <Link to="/" className="btn btn-default">Home</Link>
          <Link to="/proyecto/1/demo" className="btn btn-default">Proyecto</Link>
          <Link to="/user" className="btn btn-default">Usuario</Link> */}

          <Route path="/" exact strict render={(props) => (<Home data={this.state.items} />)}/>
          <Route path="/proyecto/:id/:name" component={Proyecto}/>
          <Route path="/about" exact strict render={
            () => {
              return (<h1>About</h1>)
            }
          } />
          <Route path="/user" exact strict component={User} />
        </div>
      </Router>
    )
  }
}

const User = () => {
  return (<h1>User</h1>)
}

export default App;