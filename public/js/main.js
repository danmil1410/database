"use strict";

//App configuration
const appConfig = {
    apiKey: "AIzaSyCWyU1e6WqN4dAFiQDuQG9pB69pSE1jPls",
    authDomain: "database-66f5c.firebaseapp.com",
    databaseURL: "https://database-66f5c.firebaseio.com",
    projectId: "database-66f5c",
    storageBucket: "database-66f5c.appspot.com",
    messagingSenderId: "891831635853"
};

firebase.initializeApp(appConfig);

//Main module
const firestoreModule = (function() {
    const _firestore = firebase.firestore();

    return {
        docRef: _firestore.collection("database")
    };
})();

//Module - add a new user
const addUserModule = (function() {
    const _addButton = document.querySelector("#addUser");
    const _firstName = document.querySelector("#firstName");
    const _lastName = document.querySelector("#lastName");

    _addButton.addEventListener("click", () => {
        try {
            if (_firstName.value && _lastName.value) {
                firestoreModule.docRef
                    .add({
                        firstName: _firstName.value,
                        lastName: _lastName.value
                    })
                    .then(() => {
                        console.log("Data saved!");
                    })
                    .catch(error => {
                        console.log("Error: ", error);
                    });
                _firstName.value = "";
                _lastName.value = "";
            } else {
                throw new SyntaxError("Incomplete data: type the full name!");
            }
        } catch (e) {
            alert(e.message);
        }
    });
})();

//Module - show existing users
const showUsersModule = (function() {
    const _showButton = document.querySelector("#showUsers");
    const _resultContainer = document.querySelector("#result");

    _showButton.addEventListener("click", () => {
        firestoreModule.docRef.onSnapshot(querySnapshot => {
            while (_resultContainer.firstChild) {
                _resultContainer.removeChild(_resultContainer.firstChild);
            }
            querySnapshot.forEach(doc => {
                const userData = doc.data();
                const text = document.createElement("p");
                _resultContainer.appendChild(text);
                text.textContent =
                    JSON.stringify(userData.firstName).replace(/["']/g, "") +
                    " " +
                    JSON.stringify(userData.lastName).replace(/["']/g, "");
            });
        });
    });
})();

//Module - remove an user
const removeUserModule = (function() {
    const _removeButton = document.querySelector("#buttonRemove");
    const _deleteFirstName = document.querySelector("#firstNameDelete");
    const _deleteLastName = document.querySelector("#lastNameDelete");
    const _selectedUser = firestoreModule.docRef
        .where("firstName", "==", _deleteFirstName.value)
        .where("lastName", "==", _deleteLastName.value);

    _removeButton.addEventListener("click", () => {
        firestoreModule.docRef.onSnapshot(querySnapshot => {
            _selectedUser
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.delete();
                    });
                    console.log("Data deleted!");
                })
                .catch(error => {
                    console.log("Error: ", error);
                });
        });
    });
})();
