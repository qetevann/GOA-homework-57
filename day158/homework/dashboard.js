const currentUser = getCurrentUser();

if (!currentUser) {
    window.location.href = "login.html";
} else {
    document.getElementById("avatarLetter").textContent = currentUser.username.charAt(0).toUpperCase();
    document.getElementById("welcomeText").textContent = `გამარჯობა, ${currentUser.username}!`;
    document.getElementById("welcomeEmail").textContent = currentUser.email;
}

document.getElementById("logoutBtn").addEventListener("click", () => {
    clearCurrentUser();
    window.location.href = "login.html";
});