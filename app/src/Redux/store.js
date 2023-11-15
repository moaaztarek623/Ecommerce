import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleWare = [thunk];

const initStore = {};

const store = createStore(rootReducer, initStore, composeWithDevTools(applyMiddleware(...middleWare)))

export default store;