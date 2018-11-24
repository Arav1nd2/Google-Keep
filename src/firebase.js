import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


var config = {
    apiKey: "AIzaSyAsKaWVB8TRK_OxzepHYQyZcNkd7EmQfN4",
    authDomain: "keep-todo.firebaseapp.com",
    databaseURL: "https://keep-todo.firebaseio.com",
    projectId: "keep-todo",
    storageBucket: "keep-todo.appspot.com",
    messagingSenderId: "289444975977"
 };
firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth(); 
const provider = new firebase.auth.GoogleAuthProvider();

export { database, auth, provider };