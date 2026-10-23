const loginForm = document.getElementById("loginForm");
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

document.querySelectorAll(".toggle_password").forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetInput = document.getElementById(btn.dataset.target);
        targetInput.type = targetInput.type === "password" ? "text" : "password";
    });
});

// თუ უკვე შესულია, პირდაპირ გადავამისამართოთ დეშბორდზე
if (getCurrentUser()) {
    window.location.href = "dashboard.html";
}

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    clearFieldErrors();
    banner.className = "banner";

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const user = findUserByEmail(email);

    if (!user) {
        setFieldError("email", "emailError", "ასეთი ელფოსტით ანგარიში ვერ მოიძებნა");
        return;
    }

    if (user.password !== password) {
        setFieldError("password", "passwordError", "პაროლი არასწორია");
        return;
    }

    setCurrentUser(user);
    showBanner("შესვლა წარმატებულია! გადამისამართება...", "success");

    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 800);
});