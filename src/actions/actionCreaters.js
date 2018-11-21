import { LOGIN, LOGOUT, REGISTER, GOOGLE_LOGIN, CHECK_USER,NULL_USER } from './actions.js';
import {auth , provider} from '../firebase';
import firebase from 'firebase';
import {notify} from 'react-notify-toast';


export const login = (email,pass) => dispatch => {
	auth.signInWithEmailAndPassword(email,pass).then(result => {
		notify.show("Succesfully Logged In", "success")
	}).catch((error) => {
		notify.show(error.message, "error")
	})
	let user = auth.currentUser

	dispatch ({
			type : LOGIN ,
			user : user
		})
}

export const register = (email, pass ) => dispatch => {
	auth.createUserWithEmailAndPassword(email,pass).then(result => {
		notify.show("Registration Successfull , Please login to continue" , "success")
	}).catch((error) => {
		notify.show(error.message, "error")
	})
	let user = auth.currentUser

	dispatch ({
		type : REGISTER,
		user : user
	})
}

export const googleLogin = () => dispatch => {
	auth.signInWithPopup(provider).then(() => {
		notify.show("Logged in Successfully","success");
	}).catch((error) => {
		notify.show(error.message , "error")
	})	
	let user = auth.currentUser

	dispatch ({
		type : GOOGLE_LOGIN,
		user : user
	})

}

export const checkUser = () => dispatch => {
	auth.onAuthStateChanged(authUser => {
		if(authUser) {
			console.log("user available");
			dispatch ({
				type : CHECK_USER,
				user : authUser
			});
		} else {
			console.log("user not available");
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
	}).catch((error) => {
		notify.show(error.message,"error")
	});
	dispatch ({
		type : LOGOUT,
	});
}