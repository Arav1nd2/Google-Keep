import { LOGIN, LOGOUT, REGISTER, GOOGLE_LOGIN, CHECK_USER, NULL_USER, GET_NOTES,ADD_NOTES } from '../actions/actions.js';



export function reducer( state = { user : {} , notes : []} , action) {
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
		case GET_NOTES :
			return { "user" : state.user , "notes" : action.notes } 
		case ADD_NOTES :
			return state;
		default :
			return state;
	}
}