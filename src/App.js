import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'

import Home from './components/Home'
import Proyecto from './components/Proyecto'

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          {/* <Link to="/" className="btn btn-default">Home</Link>
          <Link to="/proyecto/1/demo" className="btn btn-default">Proyecto</Link>
          <Link to="/user" className="btn btn-default">Usuario</Link> */}

          <Route path="/" exact strict component={Home}/>
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