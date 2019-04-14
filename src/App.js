import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './components/Home'
import Carrito from './components/Carrito'
import Contacto from './components/Contacto'
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
          <Route path="/carrito" component={Carrito} />
		  <Route path="/contacto" component={Contacto} />
        </div>
      </Router>
    )
  }

}

export default App;