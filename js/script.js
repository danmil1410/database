"use strict"

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const buttonRemoveB = document.getElementById("buttonRemoveB");
const buttonRemoveE = document.getElementById("buttonRemoveE");
const buttonRemoveA = document.getElementById("buttonRemoveA");
const users = [];

function User (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
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
    text.textContent += JSON.stringify(user.firstName) + " " + JSON.stringify(user.lastName);
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

submit.addEventListener("click", () => {
    try {
        if (firstName.value && lastName.value) {
            addUser(makeUser());
        } else {
            throw new TypeError("Incomplete data. Type the full name!");
        }
    } catch(e) {
        alert ("Input Error: " + e.message);
    }
});

buttonRemoveB.addEventListener("click", () => {
    try {
        if (users.length) {
            removeUserB();
        } else {
            throw new TypeError("There are no users to delete!");
        }
    } catch(e) {
        alert ("Array Error: " + e.message);
    }
});

buttonRemoveE.addEventListener("click", () => {
    try {
        if (users.length) {
            removeUserE();
        } else {
            throw new TypeError("There are no users to delete!");
        }
    } catch(e) {
        alert ("Array Error: " + e.message);
    }
});

buttonRemoveA.addEventListener("click", () => {
    try {
        if (users.length) {
            removeUserA();
        } else {
            throw new TypeError("There are no users to delete!");
        }
    } catch(e) {
        alert ("Array Error: " + e.message);
    }
});