"use strict"

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const buttonRemoveB = document.getElementById("buttonRemoveB");
const buttonRemoveE = document.getElementById("buttonRemoveE");
const buttonRemoveA = document.getElementById("buttonRemoveA");
const users = [];

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

function makeUser() {
    let user = new User(firstName.value, lastName.value);
    showUsers(user);
    return user;
}

function addUser(user) {
    users.push(user);
}

function showUsers(user) {
    const text = document.createElement("p");
    result.appendChild(text);
    text.textContent += JSON.stringify(user.firstName).replace(/["']/g, "") + " " + JSON.stringify(user.lastName).replace(/["']/g, "");
}

function removeUserB() {
    result.firstChild.remove();
    users.shift();
}

function removeUserE() {
    result.lastChild.remove();
    users.pop();
}

function removeUsers() {
    while (result.hasChildNodes()) {
        result.removeChild(result.lastChild);
    }
    users.length = 0;
}

function throwExc() {
    throw new TypeError("There are no users to delete!");
}

function catchExc(e) {
    alert (e.name+ ": " + e.message);
}

submit.addEventListener("click", () => {
    try {
        if (firstName.value && lastName.value) {
            addUser(makeUser());
        } else {
            throw new TypeError("Incomplete data. Type the full name!");
        }
    } catch(e) {
        catchExc(e);
    }
});

buttonRemoveB.addEventListener("click", () => {
    try {
        if (users.length) {
            removeUserB();
        } else {
            throwExc();
        }
    } catch(e) {
        catchExc(e);
    }
});

buttonRemoveE.addEventListener("click", () => {
    try {
        if (users.length) {
            removeUserE();
        } else {
            throwExc();
        }
    } catch(e) {
        catchExc(e);
    }
});

buttonRemoveA.addEventListener("click", () => {
    try {
        if (users.length) {
            removeUsers();
        } else {
            throwExc();
        }
    } catch(e) {
        catchExc(e);
    }
});