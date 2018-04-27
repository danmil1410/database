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

const docRef = firestore.doc("database/user");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const submit = document.querySelector("#submit");
const result = document.querySelector("#result");

submit.addEventListener("click", () => {
    const userName = [firstName.value, lastName.value];
    console.log("Save user: " + userName);
    docRef
        .create({
            user: userName
        })
        .then(() => {
            console.log("Data saved!");
        })
        .catch(error => {
            console.log("Error: ", error);
        });
});

submit.addEventListener("click", () => {
    docRef
        .get()
        .then(doc => {
            if (doc && doc.exists) {
                const userData = doc.data();
                const text = document.createElement("p");
                result.appendChild(text);
                text.textContent = JSON.stringify(userData);
            }
        })
        .catch(error => {
            console.log("Error: ", error);
        });
});
