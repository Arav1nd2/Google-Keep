import { LOGIN, LOGOUT, REGISTER, GOOGLE_LOGIN, CHECK_USER, NULL_USER } from '../actions/actions.js';



export function reducer( state = { user : {}} , action) {
	switch(action.type) {
		case LOGIN :
			return { "user" : action.user }
		case REGISTER :
			return { "user" : action.user }
		case GOOGLE_LOGIN :
			return { "user" : action.user }
		case CHECK_USER :
			return { "user" : action.user }
		case NULL_USER :
			return { "user" : action.user }
		case LOGOUT :
			return state;
		default :
			return state;
	}
}