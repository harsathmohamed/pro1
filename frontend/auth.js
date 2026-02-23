function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    })
        .then(res => {
            if (!res.ok) throw new Error("Invalid credentials");
            return res.json();
        })
        .then(data => {
            localStorage.setItem("role", data.role);
            localStorage.setItem("userId", data.userId);

            if (data.role === "ADMIN")
                window.location.href = "admin-dashboard.html";
            else if (data.role === "TEACHER")
                window.location.href = "teacher-dashboard.html";
            else
                window.location.href = "student-dashboard.html";
        })
        .catch(err => {
            document.getElementById("error").innerText = err.message;
        });
}
function register() {
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ name, email, password, role: "STUDENT" })
    })
        .then(res => res.text())
        .then(data => {
            alert(data);
            toggleForm();
        })
        .catch(() => alert("Registration failed"));
}