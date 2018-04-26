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

submit.addEventListener("click", () => {
    addUser(makeUser());
});

function removeUserB() {
    result.children[0].remove();
    users.shift();
}

function removeUserE() {
    users.pop();
}

function removeUsers() {
    users.length = 0;
}