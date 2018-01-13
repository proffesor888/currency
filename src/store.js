import {applyMiddleware, createStore} from 'redux';
import {UserMas} from './reducers/reducers';
import logger from 'redux-logger';

export default createStore(UserMas, applyMiddleware(logger));