import firebase from 'firebase';
import {database , auth, provider} from './firebase';
import {notify} from 'react-notify-toast';
import { createStore ,applyMiddleware } from 'redux'; 
import { reducer } from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const intitialState  = {
		user : {},
}

export const store = createStore(reducer, intitialState, composeWithDevTools(applyMiddleware(thunk)));

/** Thunks **/






/** Reducer **/







