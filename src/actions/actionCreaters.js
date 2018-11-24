import { LOGIN, LOGOUT, REGISTER, GOOGLE_LOGIN, CHECK_USER,NULL_USER, GET_NOTES , ADD_NOTES } from './actions.js';
import {auth , provider , database} from '../firebase';
import {notify} from 'react-notify-toast';
import {store} from '../store';

export const login = (email,pass) => dispatch => {
	auth.signInWithEmailAndPassword(email,pass).then(result => {
		notify.show("Succesfully Logged In", "success");
		let user = auth.currentUser;
		dispatch ({
			type : LOGIN ,
			user : user
		});
	}).catch((error) => {
		notify.show(error.message, "error")
	})
}

export const register = (name ,email, pass ) => dispatch => {
	auth.createUserWithEmailAndPassword(email,pass).then(() => {
		let user = auth.currentUser;
		if(user) {
			user.updateProfile({
				displayName : name
			}).then(() => {
				notify.show("Registration Successfull" , "success")
			})
		dispatch ({
				type : REGISTER,
				user : user
			})
		}
	}).catch((error) => {
		notify.show(error.message, "error")
	})

}

export const googleLogin = () => dispatch => {
	auth.signInWithPopup(provider).then(() => {
		notify.show("Logged in Successfully","success");
		let user = auth.currentUser;
		dispatch ({
			type : GOOGLE_LOGIN,
			user : user
		});
	}).catch((error) => {
		notify.show(error.message , "error")
	})	

}

export const checkUser = () => dispatch => {
	auth.onAuthStateChanged(authUser => {
		if(authUser) {
			dispatch ({
				type : CHECK_USER,
				user : authUser
			});
		} else {
			dispatch  ({
				type : NULL_USER,
				user : null
			});
		}
	})
}

export const signOut = () => dispatch => {
	auth.signOut().then(()=> {
		notify.show("Logged Out Successfully", "success")
		dispatch ({
			type : LOGOUT,
		});
	}).catch((error) => {
		notify.show(error.message,"error")
	});
}

export const getNotes = () => dispatch => {
	let userId = store.getState().user.displayName;
	database.ref('users/' + userId ).on("value", snap => {
		if(snap.val()) {
			let notes = Object.keys(snap.val()).map( k => {
				if(snap.val()[k]) {
					return snap.val()[k];
				}
				else 
					return null;
			});
			dispatch({
				type : GET_NOTES,
				notes : notes
			});
		}
		
	})
}

export const addNotes = (obj) => dispatch => {
	database.ref('users/' + store.getState().user.displayName + '/' + obj.id).set({
		id : obj.id,
		title : obj.title,
		body : obj.body
	});
	dispatch({
		type : ADD_NOTES
	});

}