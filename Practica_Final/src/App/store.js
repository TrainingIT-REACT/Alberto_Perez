import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
//import promise from 'redux-promise-middleware';

// Reducers
import album from './reducers/album';
import song from './reducers/song';
import user from './reducers/user';
import response from './reducers/response';

import logger from './middlewares/logger';

export default createStore(combineReducers({ user, album, song, response }), applyMiddleware(thunk, logger));
