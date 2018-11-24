
import { createStore ,applyMiddleware } from 'redux'; 
import { reducer } from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const intitialState  = {
		user : {},
		notes : []
}

export const store = createStore(reducer, intitialState, composeWithDevTools(applyMiddleware(thunk)));

/** Thunks **/






/** Reducer **/







