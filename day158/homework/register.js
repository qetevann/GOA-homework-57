const registerForm = document.getElementById("registerForm");
const banner = document.getElementById("banner");

function showBanner(message, type) {
    banner.textContent = message;
    banner.className = `banner show ${type}`;
}

function clearFieldErrors() {
    document.querySelectorAll(".field_error").forEach((el) => (el.textContent = ""));
    document.querySelectorAll("input").forEach((el) => el.classList.remove("error"));
}

function setFieldError(inputId, errorId, message) {
    document.getElementById(inputId).classList.add("error");
    document.getElementById(errorId).textContent = message;
}

// პაროლის ჩვენება/დამალვა
document.querySelectorAll(".toggle_password").forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetInput = document.getElementById(btn.dataset.target);
        targetInput.type = targetInput.type === "password" ? "text" : "password";
    });
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearFieldErrors();
    banner.className = "banner";

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    let hasError = false;

    if (username.length < 2) {
        setFieldError("username", "usernameError", "სახელი უნდა იყოს მინიმუმ 2 სიმბოლო");
        hasError = true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        setFieldError("email", "emailError", "შეიყვანეთ სწორი ელფოსტა");
        hasError = true;
    } else if (findUserByEmail(email)) {
        setFieldError("email", "emailError", "ეს ელფოსტა უკვე რეგისტრირებულია");
        hasError = true;
    }

    if (password.length < 6) {
        setFieldError("password", "passwordError", "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლო");
        hasError = true;
    }

    if (confirmPassword !== password) {
        setFieldError("confirmPassword", "confirmPasswordError", "პაროლები არ ემთხვევა");
        hasError = true;
    }

    if (hasError) return;

    registerUser({ username, email, password });
    showBanner("რეგისტრაცია წარმატებით დასრულდა! გადამისამართება...", "success");

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1200);
});