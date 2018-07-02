import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Home from './components/Home'
import Proyecto from './components/Proyecto'

import fontawesome from '@fortawesome/fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF'
import faGooglePlus from '@fortawesome/fontawesome-free-brands/faGooglePlusG'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faSkype from '@fortawesome/fontawesome-free-brands/faSkype'

class App extends Component {

  constructor(){
    super();

    fontawesome.library.add(faFacebook)
    fontawesome.library.add(faGooglePlus)
    fontawesome.library.add(faInstagram)
    fontawesome.library.add(faSkype)

    this.state = {
      scrollTop: false,
      items: [
        { id: 1, name: 'VS Code ó Sublime Text', description: 'Veremos cuales son las principales ventajas y ...', languaje: 'Editor de código', image: 'https://i2.wp.com/windtux.com/wp-content/uploads/2017/09/vs-code-logo.png'},
        { id: 2, name: '¿App nativa o híbrida?', description: 'Compararemos las diferentes opciones entre aplicaciones', languaje: 'APLICACIONES', image: 'https://secure.meetupstatic.com/photos/event/b/b/e/f/600_459588111.jpeg' },
        { id: 3, name: 'Reactjs', description: 'The best developer tools, free for students', languaje: 'Javascript', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
        //{ id: 4, name: 'AngularJs', description: 'The best developer tools, free for students', languaje: 'Javascript', image: 'http://vm5.eu/uploads/media/ckUploads/0001/01/f824e438ea6f0ad77481c08b9be28b0accb64231.jpeg' },
        //{ id: 5, name: 'JQuery', description: 'The best developer tools, free for students', languaje: 'Javascript', image: 'https://cms-assets.tutsplus.com/uploads/users/71/courses/916/preview_image/jquery-3.png' },
        //{ id: 6, name: 'Codeigniter', description: 'The best developer tools, free for students', languaje: 'PHP', image: 'https://rvtechnologies.co.in/wp-content/uploads/2017/09/UVMePI8XdfOs34X.jpg' },
        //{ id: 7, name: 'Bootstrap 4', description: 'The best developer tools, free for students', languaje: 'CSS 3', image: 'https://steemitimages.com/0x0/https://res.cloudinary.com/hpiynhbhq/image/upload/v1521231249/c1a3zxba2c1bm3qmhnxn.png' },
        //{ id: 8, name: 'PostgreSQL', description: 'The best developer tools, free for students', languaje: 'SQL', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
        //{ id: 9, name: 'Zend Framework', description: 'The best developer tools, free for students', languaje: 'PHP', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
        //{ id: 10, name: 'Drupal', description: 'The best developer tools, free for students', languaje: 'PHP', image: 'https://i.pinimg.com/564x/aa/24/09/aa24094b5f7308758f4874ac0244e63e--building-projects.jpg' },
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