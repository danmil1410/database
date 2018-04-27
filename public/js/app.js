"use strict";

let config = {
    apiKey: "AIzaSyCWyU1e6WqN4dAFiQDuQG9pB69pSE1jPls",
    authDomain: "database-66f5c.firebaseapp.com",
    databaseURL: "https://database-66f5c.firebaseio.com",
    projectId: "database-66f5c",
    storageBucket: "database-66f5c.appspot.com",
    messagingSenderId: "891831635853"
};

firebase.initializeApp(config);
let firestore = firebase.firestore();

const docRef = firestore.doc("samples/userData");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
    const userName = [firstName.value, lastName.value];
    console.log("Save user: " + userName);
    docRef
        .set({
            user: userName
        })
        .then(() => {
            console.log("Data saved!");
        })
        .catch(error => {
            console.log("Error: ", error);
        });
});
