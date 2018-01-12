import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
//import {Router, Route} from 'react-router';
import {BrowserRouter, Route} from 'react-router-dom'
import App from './components/App';
import user from './components/user';
import './index.css';
import 'D:/123/currency.app/node_modules/bootstrap/dist/css/bootstrap.min.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
    <div>
        <Route exact path='/' component={App} />
        <Route path='/user' component={user} />
    </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
