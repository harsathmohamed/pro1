// Protect page (must login)
const role = localStorage.getItem("role");

if (!role) {
    window.location.href = "login.html";
}

function logout() {
    localStorage.clear();
    window.location.href = "login.html";
}