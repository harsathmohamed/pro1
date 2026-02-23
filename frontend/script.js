function enroll() {
    alert("🎉 Successfully Enrolled!");
}
function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json())
        .then(data => {

            if (data.role === "ADMIN") {
                window.location.href = "admin-dashboard.html";
            } else if (data.role === "TEACHER") {
                window.location.href = "teacher-dashboard.html";
            } else if (data.role === "STUDENT") {
                window.location.href = "student-dashboard.html";
            } else {
                document.getElementById("error").innerText = "Invalid login";
            }

        })
        .catch(() => {
            document.getElementById("error").innerText = "Server error";
        });
}