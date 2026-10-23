class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    changeName(newName) {
        this.name = newName;
    }

    increaseAge(byAmount) {
        this.age += byAmount;
    }
}

let currentUser = null;

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const newNameInput = document.getElementById("newNameInput");
const increaseByInput = document.getElementById("increaseByInput");
const resultEl = document.getElementById("result");

function showUser() {
    if (!currentUser) {
        resultEl.textContent = "ჯერ არცერთი User არ არის შექმნილი";
        return;
    }
    resultEl.textContent = JSON.stringify(currentUser, null, 2);
    console.log(currentUser);
}

document.getElementById("createBtn").addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    if (!name || !ageInput.value) {
        alert("გთხოვთ შეიყვანოთ სახელი და ასაკი");
        return;
    }

    currentUser = new User(name, age);
    console.log(currentUser);
    showUser();
});

document.getElementById("changeNameBtn").addEventListener("click", () => {
    if (!currentUser) {
        alert("ჯერ შექმენით User");
        return;
    }
    currentUser.changeName(newNameInput.value.trim());
    showUser();
});

document.getElementById("increaseAgeBtn").addEventListener("click", () => {
    if (!currentUser) {
        alert("ჯერ შექმენით User");
        return;
    }
    currentUser.increaseAge(Number(increaseByInput.value) || 0);
    showUser();
});