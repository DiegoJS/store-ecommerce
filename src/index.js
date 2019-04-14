import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome/index'
import '@fortawesome/fontawesome-free-brands/index'
import '@fortawesome/fontawesome-free-regular/index'
import '@fortawesome/fontawesome-free-solid/index'
import store from './store.js'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
