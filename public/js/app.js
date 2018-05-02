"use strict";

const config = {
    apiKey: "AIzaSyCWyU1e6WqN4dAFiQDuQG9pB69pSE1jPls",
    authDomain: "database-66f5c.firebaseapp.com",
    databaseURL: "https://database-66f5c.firebaseio.com",
    projectId: "database-66f5c",
    storageBucket: "database-66f5c.appspot.com",
    messagingSenderId: "891831635853"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const docRef = firestore.collection("database");
const userForm = document.querySelector("#userForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const addUser = document.querySelector("#addUser");
const showUsers = document.querySelector("#showUsers");
const result = document.querySelector("#result");

addUser.addEventListener("click", () => {
    try {
        if (firstName.value && lastName.value) {
            docRef
                .add({
                    firstName: firstName.value,
                    lastName: lastName.value
                })
                .then(() => {
                    console.log("Data saved!");
                })
                .catch(error => {
                    console.log("Error: ", error);
                });
            firstName.value = "";
            lastName.value = "";
        } else {
            throw new SyntaxError("Incomplete data: type the full name!");
        }
    } catch (e) {
        alert(e.message);
    }
});

showUsers.addEventListener("click", () => {
    docRef
        .onSnapshot(querySnapshot => {
            while (result.firstChild) {
                result.removeChild(result.firstChild);
            }
            querySnapshot.forEach(doc => {
                if (doc && doc.exists) {
                    const userData = doc.data();
                    const text = document.createElement("p");
                    result.appendChild(text);
                    text.textContent =
                        JSON.stringify(userData.firstName).replace(
                            /["']/g,
                            ""
                        ) +
                        " " +
                        JSON.stringify(userData.lastName).replace(/["']/g, "");
                }
            });
        })
        .catch(error => {
            console.log("Error: ", error);
        });
});
