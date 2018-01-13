import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import User from './components/user';
import './index.css';
import 'F:/React/Currency/node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>
                <User />
                </Provider>,
                document.getElementById('root'));
registerServiceWorker();
