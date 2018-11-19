import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAsKaWVB8TRK_OxzepHYQyZcNkd7EmQfN4",
    authDomain: "keep-todo.firebaseapp.com",
    databaseURL: "https://keep-todo.firebaseio.com",
    projectId: "keep-todo",
    storageBucket: "keep-todo.appspot.com",
    messagingSenderId: "289444975977"
 };
firebase.initializeApp(config);

export const database = firebase.database(); 