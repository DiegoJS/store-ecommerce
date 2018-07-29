import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './components/Home'
import Proyecto from './components/Proyecto'
import fontawesome from '@fortawesome/fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faGooglePlus from '@fortawesome/fontawesome-free-brands/faGooglePlusG'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faSkype from '@fortawesome/fontawesome-free-brands/faSkype'

class App extends Component {

  constructor() {
    super();

    fontawesome.library.add(faFacebook)
    fontawesome.library.add(faGooglePlus)
    fontawesome.library.add(faInstagram)
    fontawesome.library.add(faSkype)

    this.state = {
      scrollTop: false,
      items: []
    }

  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact strict render={(props) => (<Home data={this.state.items} />)} />
          <Route path="/proyecto/:id/:name" component={Proyecto} />
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