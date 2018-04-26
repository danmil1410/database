"use strict"

function usersApp() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let submit = document.getElementById("submit");
    let result = document.getElementById("result");
    let buttonRemoveB = document.getElementById("buttonRemoveB");
    let buttonRemoveE = document.getElementById("buttonRemoveE");
    let buttonRemoveA = document.getElementById("buttonRemoveA");
    let users = [];

    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    function makeUser() {
        let user = new User(firstName, lastName);
        return user;
    }

    function addUser(user) {
        users.push(user);
    }

    function removeUserB() {
        users.shift();
    }

    function removeUserE() {
        users.pop();
    }

    function removeUsers() {
        users.length = 0;
    }

    function showUsers() {
        
    }
}
