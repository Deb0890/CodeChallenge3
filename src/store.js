import { createStore, applyMiddleware } from 'redux';
import repoReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const store = createStore(repoReducer, composeWithDevTools(applyMiddleWare(thunk)) );